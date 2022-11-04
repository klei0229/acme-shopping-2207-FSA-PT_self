import React, { useState, useEffect } from 'react';
import { updateAuth } from '../store';
import { useDispatch } from 'react-redux';

const Profile = ()=> {
  const [el, setEl] = useState(null);
  const [data, setData] = useState('');
  const dispatch = useDispatch();

  useEffect(()=> {
    if(el){
      el.addEventListener('change', (ev)=> {
        const file = ev.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.addEventListener('load', ()=> {
          setData(reader.result);
        });
      });
    }
  },[el]);
  const save = async(ev)=> {
    ev.preventDefault();
    await dispatch(updateAuth({ avatar: data }));
    el.value = '';
    setData('');
  }
  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={ save }>
        <input type='file' ref={ x => setEl(x)}/>
        <button disabled={ !data }>Upload Avatar</button>
      </form>
      <img src={data} />
    </div>
  );
};

export default Profile;
