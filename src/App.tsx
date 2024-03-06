import React, { Suspense } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { shallowEqual } from 'react-redux'
import { useAppSelector, useAppDispatch } from './store'
import { changeCount } from './store/modules/counter'

function App() {
  const state = useAppSelector((state) => state.counter, shallowEqual)
  const dispatch = useAppDispatch()

  function handleClick() {
    dispatch(changeCount(1))
  }

  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>
      <h2>当前计数： {state.count}</h2>
      <button onClick={handleClick}>修改count</button>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default App
