import React from 'react'
import { Button } from "antd";
import { Link } from "react-router-dom";
import { HomeFilled } from '@ant-design/icons';

const PageNotFound = () => {
  return (
    <div className="min-h-[100vh] flex flex-col items-center justify-center text-center bg-[#1D3557]">
        <div className="border border-white rounded-[50px] p-6 shadow-card">

    <h1 className="text-8xl font-bold text-[#1D3557]">404</h1>

    <p className="text-lg text-[#7B9FC3] mt-2">
      Oops! The page you’re looking for doesn’t exist.
    </p>

    <Link to="/">
      <Button className="mt-6 bg-[#1D3557] hover:bg-[#7B9FC3] text-white px-6 py-5 rounded-lg">
      <HomeFilled /> Go to Dashboard
      </Button>
    </Link>
        </div>
  </div>
  )
}

export default PageNotFound