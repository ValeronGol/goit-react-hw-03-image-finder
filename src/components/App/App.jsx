import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ConteinerApp } from './App.styled';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery /ImageGallery ';
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
    largeImg: '',
  };

  submitForm = q => {
    this.setState({ query: q });
  };

  render() {
    return (
      <ConteinerApp>
        <Searchbar onSubmit={this.submitForm} />
        <ToastContainer />
      </ConteinerApp>
    );
  }
}

export default App;
