import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemsActions } from '../store/itemsSlice';
import { fetchStatusActions } from '../store/fetchStatusSlice';



function FetchItems() {

    const fetchStatus = useSelector(store=>store.fetchStatus);
    const dispatch = useDispatch();

    useEffect(()=>{
    if (fetchStatus.fetchDone) return

    const controller = new AbortController;
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items",{signal})
    .then((res)=>res.json())
    .then(({items})=>{
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchFinished());
        dispatch(itemsActions.addInitialItems(items));
    })
},[])

  return (
    <></>
  )
}

export default FetchItems;