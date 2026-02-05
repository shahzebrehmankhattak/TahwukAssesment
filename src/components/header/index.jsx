import React from "react";
import { Input, Badge, Avatar, Dropdown } from "antd";
import {
  BellOutlined,
  SearchOutlined,
  DownOutlined,
} from "@ant-design/icons";
import userProfile from '../../assets/profile-user.png'

const HeaderPage = () => {
  const menuItems = [
    { key: "1", label: "Profile" },
    { key: "2", label: "Logout" },
  ];

  return (
    <div className="w-full bg-white border-b border-[#E0E8ED] px-4 sm:px-6">
      <div className="h-[70px] flex items-center justify-between gap-4">

        {/* Left Side - Search */}
        <div className="flex-1 max-w-[320px] hidden sm:block">
          <Input
            placeholder="Search"
            prefix={<SearchOutlined className="text-gray-400" />}
            className="rounded-lg bg-[#F5F8FB] border-none px-3 py-2"
          />
        </div>

        {/* Mobile Search */}
        <div className="flex-1 sm:hidden">
          <Input
            placeholder="Search..."
            prefix={<SearchOutlined className="text-gray-400" />}
            className="rounded-lg bg-[#F5F8FB] border-none"
          />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4 sm:gap-6">

          {/* Notification */}
          <Badge dot>
            <BellOutlined className="text-lg sm:text-xl text-gray-500 cursor-pointer" />
          </Badge>

          {/* User Profile Dropdown */}
          <Dropdown menu={{ items: menuItems }} trigger={["click"]}>
            <div className="flex items-center gap-2 cursor-pointer">

              <Avatar
                size={32}
                src={userProfile}
              />

              {/* Hide name on mobile */}
              <span className="hidden md:block text-sm font-medium text-[#1D3557]">
                Mohamed
              </span>

              <DownOutlined className="text-xs text-gray-400 hidden sm:block" />
            </div>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default HeaderPage;
