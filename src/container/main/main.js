import React, { useState, useEffect } from 'react';
import Modal from '../../components/modal/modal';
import Navbar from '../../components/navbar/navbar';
import SearchBar from '../../components/search/search';
import { connect } from 'react-redux'
import * as Constant from '../../constant/constant'
import classes from './main.module.css';
import Pagination from '../../components/pagination/pagination'

const Main = (props) => {
  const [showModal, setShowModal] = useState(false)
  const [searchValue, setSearchValue] = useState("");
  const [selectedImage, setSelectedImage] = useState("");
  const [listPhotos, setListPhotos] = useState([]);
  const [activePage, setActivePage] = useState(1)
  const [pageStart, setPageStart] = useState(0);
  const [pageEnd, setPageEnd] = useState(9)

  useEffect(() => {
    setListPhotos(props.photoList)
  }, [props]);

  const hideModal = () => {
    setShowModal(false)
  }
  const inputChange = (e) => {
    setSearchValue(e.target.value)
  }

  const inputClicked = (e) => {
    e.preventDefault();
    props.getPhotoList(searchValue)
  }

  const selectImage = (id) => {
    setSelectedImage(id)
    setShowModal(true)
  }
  const changePage = (e) => {
    if (e.target.innerHTML == 1) {
      setPageStart(0);
      setPageEnd(9)
      setActivePage(e.target.innerHTML)
    }
    else {
      setPageStart(9 * e.target.innerHTML - 9)
      setPageEnd(9 * e.target.innerHTML)
      setActivePage(e.target.innerHTML)
    }
  }

  let photolist;
  photolist = props.photoList.slice(pageStart, pageEnd).map((elem, index) => {
    return (
      <div key={elem.id} className={classes.photo_wrapper}>
        <div className={classes.img_div} onClick={() => selectImage(elem)}>
          <img src={elem.urls.small} alt='photo' className={classes.image} />
        </div>

      </div>
    )
  })

  return (
    <div>
      <Navbar />
      <SearchBar
        changed={(e) => inputChange(e)}
        clicked={inputClicked}
        submit={inputClicked}
      />
      <div className={classes.photolist_container}>
        {photolist}
      </div>

      <Modal show={showModal} hide={hideModal} image={selectedImage}>
        <div
          style={{ boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2), 0px 3px 4px 0px rgba(0,0,0,0.14), 0px 1px 8px 0px rgba(0,0,0,0.12)' }}
        >{selectedImage != "" ? <img src={selectedImage.urls.regular} alt='photo' style={{ width: '100%', height: 'auto', maxHeight: '80vh' }} /> : null}
        </div>
      </Modal>

      <Pagination items={listPhotos} changePage={(e) => changePage(e)} active={activePage} />
    </div >
  );
}

const mapStateToProps = (state) => {
  return {
    photoList: state.photoList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPhotoList: (val) => {
      dispatch({ type: Constant.GET_ALL_IMG, payload: val })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
