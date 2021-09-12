import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    page: 1,
    error: null,
    isOpenModal: false,
    largeimg: '',
  };

  submitForm = q => {
    this.setState({ query: q });
  };
  fetchData = () => {
    this.setState({ loading: true });

    fetch(
      `https://pixabay.com/api/?q=${this.state.query}&page=${this.state.page}&key=22579903-23cd6d72a32c76f3810c95a65&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(
          new Error(
            'По такому запросу картинок не найдено. Введите другой запрос.',
          ),
        );
      })
      .then(imgData => {
        this.setState(prevState => ({
          page: prevState.page + 1,
          imgData: prevState.imgData
            ? [...prevState.imgData, ...imgData.hits]
            : imgData.hits,
          loading: false,
        }));
      })
      .catch(error => this.setState({ error }));
  };

  componentDidUpdate(prevProps, prevState) {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });

    if (prevState.query !== this.state.query) {
      this.setState({ imgData: null, page: 1 });
      this.fetchData();
    }
  }

  getNewImg = () => {
    this.fetchData();
  };

  togleModalShow = ev => {
    if (!this.state.isOpenModal) {
      this.setState({ largeimg: ev.target.dataset.largeimg });
    }
    this.setState(prevState => ({
      isOpenModal: !prevState.isOpenModal,
    }));
  };

  render({ imgData, loading, error } = this.state) {
    return (
      <ConteinerApp>
        <Searchbar onSubmit={this.submitForm} />
        <ToastContainer autoClose={3000} />
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
      </ConteinerApp>
    );
  }
}

export default App;
