import React, { useEffect, useRef } from 'react';

const  Preloader = () => {

  const preloderRef = useRef();

  useEffect( () => {
    $(preloderRef.current).fadeOut('slow', function(){
      $(this).remove();
    })
  }, [])

  return (
    <div id='preloader' ref={preloderRef}/>
  )
}

export default Preloader;
