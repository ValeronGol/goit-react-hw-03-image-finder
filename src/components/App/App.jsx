import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { fetchImages } from 'services/Api';
import { Scroll } from 'services/Scroll';
import { ConteinerApp } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { LoaderMore } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';

class App extends Component {
  state = {
    query: null,
    imgData: null,
    loading: false,
    error: null,
    page: 1,
    isOpenModal: false,
    largeimg: '',
  };

  submitForm = q => {
    this.setState({ query: q });
  };
  fetchData = () => {
    this.setState({ loading: true });
    const { query, page } = this.state;
    const images = fetchImages(query, page);
    images
      .then(imgData => {
        this.setState(prevState => ({
          page: prevState.page + 1,
          imgData: prevState.imgData
            ? [...prevState.imgData, ...imgData.hits]
            : imgData.hits,
          loading: false,
        }));
      })
      .catch(error => {
        this.setState({
          error,
        });
      });
  };

  componentDidUpdate(prevProps, prevState) {
    Scroll();

    if (prevState.query !== this.state.query) {
      this.setState({ imgData: null, page: 1 });
      this.fetchData();
    }
  }

  getNewImg = () => {
    this.fetchData();
  };

  togleModalShow = event => {
    if (!this.state.isOpenModal) {
      this.setState({ largeimg: event.target.dataset.largeimg });
    }
    this.setState(prevState => ({
      isOpenModal: !prevState.isOpenModal,
    }));
  };

  render({ imgData, loading, error } = this.state) {
    return (
      <ConteinerApp>
        <Searchbar onSubmit={this.submitForm} />
        {error && <h3>{error.message}</h3>}
        {imgData && imgData.length === 0 && (
          <h3>По такому запросу картинок не найдено. Введите другой запрос.</h3>
        )}
        {!imgData && loading && <LoaderMore />}
        {imgData && imgData.length > 0 && (
          <>
            <ImageGallery
              images={this.state.imgData}
              onClick={this.togleModalShow}
            />
            {this.state.isOpenModal && (
              <Modal
                showModal={this.togleModalShow}
                props={this.state.largeimg}
              />
            )}
            {loading ? <LoaderMore /> : <Button onClick={this.getNewImg} />}
          </>
        )}
        <ToastContainer autoClose={3000} />
      </ConteinerApp>
    );
  }
}

export default App;
