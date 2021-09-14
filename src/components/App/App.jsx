import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { fetchImages } from 'services/api';
import { scroll } from 'services/scroll';
import { Searchbar } from 'components/Searchbar/Searchbar';
import ImageGallery from 'components/ImageGallery/ImageGallery';
import { LoaderMore } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { ConteinerApp, TitleApp } from './App.styled';
import 'react-toastify/dist/ReactToastify.css';

class App extends Component {
  state = {
    query: null,
    imgData: null,
    loading: false,
    error: null,
    page: 1,
    isOpenModal: false,
    photo: '',
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
      })
      .finally(() => this.setState({ loading: false }));
  };

  componentDidUpdate(prevProps, prevState) {
    scroll();

    if (prevState.query !== this.state.query) {
      this.setState({ imgData: null, page: 1 });
      this.fetchData();
    }
  }

  toggleModalShow = event => {
    if (!this.state.isOpenModal) {
      this.setState({ photo: event.target.dataset.photo });
    }
    this.setState(prevState => ({
      isOpenModal: !prevState.isOpenModal,
    }));
  };

  render() {
    const { imgData, loading, error } = this.state;
    return (
      <ConteinerApp>
        <Searchbar onSubmit={this.submitForm} />
        {error && <TitleApp>{error.message}</TitleApp>}
        {imgData && imgData.length === 0 && (
          <TitleApp>
            По такому запросу картинок не найдено. Введите другой запрос!!!
          </TitleApp>
        )}
        {!imgData && loading && <LoaderMore />}
        {imgData && imgData.length > 0 && (
          <>
            <ImageGallery
              images={this.state.imgData}
              onClick={this.toggleModalShow}
            />
            {this.state.isOpenModal && (
              <Modal
                showModal={this.toggleModalShow}
                props={this.state.photo}
              />
            )}
            {loading ? <LoaderMore /> : <Button onClick={this.fetchData} />}
          </>
        )}
        <ToastContainer autoClose={3000} />
      </ConteinerApp>
    );
  }
}

export default App;
