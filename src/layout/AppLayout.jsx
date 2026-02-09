import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import { Outlet, Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import HeaderPage from "../components/header";
import home from "../assets/home.png";
import medicalFile from "../assets/medical-file.png";
import profile from "../assets/profile.png";
import task from "../assets/task.png";
import document from "../assets/document.png";
import chartBarLine from "../assets/chart-bar-line-blue.png";
import user from "../assets/user.png";
import arrowLeft from "../assets/arrow-left.png";

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const location = useLocation();

  // ✅ Sidebar state
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { key: "/", icon: home, label: "Dashboard" },
    { key: "/details", icon: medicalFile, label: "Details Page" },
    { key: "/perspectives", icon: profile, label: "Perspectives" },
    { key: "/task", icon: task, label: "Tasks" },
    { key: "/document", icon: document, label: "Documents" },
    { key: "/report", icon: chartBarLine, label: "Reports" },
    { key: "/role", icon: user, label: "Users & Roles" },
  ];

  return (
    <Layout className="min-h-screen">
      {/* ✅ Sidebar */}
      <Sider
        collapsible
        collapsed={collapsed}
        trigger={null}
        width={240}
        collapsedWidth={0}
        breakpoint="lg"
        onBreakpoint={(broken) => {
          setCollapsed(broken);
        }}
        className="bg-[#1D3557] relative"
      >
        {/* Logo */}
        <div className="p-4">
          <img src={logo} alt="Logo" className="w-[140px]" />
        </div>

        {/* Menu */}
        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          className="bg-transparent"
        >
          {menuItems.map((item) => {
            const isActive = location.pathname === item.key;

            return (
              <Menu.Item
                key={item.key}
                className={`mx-3 my-1 rounded-lg transition-colors 
                  ${
                    isActive
                      ? "bg-sidebar-active text-white"
                      : "!text-[#7B9FC3] hover:bg-[#1A2A3C]"
                  }
                `}
              >
                <Link to={item.key} className="flex items-center gap-3">
                  <img src={item.icon} alt="" className="w-4 h-4" />
                  {item.label}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
        <div className="absolute right-[-20px] sm:right-[-28px] top-5 md:top-4">
          <div
            type="text"
            className={`text-xs md:text-base collpased-button ${
              collapsed ? "mr-0" : "md:mr-4"
            }`}
            onClick={() => setCollapsed(!collapsed)}
          >
            <img
              src={arrowLeft}
              alt=""
              className={`${collapsed ? "rotate-180 w-[24px]" : ""}`}
            />
          </div>
        </div>
      </Sider>

      {/* ✅ Main Layout */}
      <Layout>
        {/* Header */}
        <Header className="bg-white flex items-center px-4 shadow-sm ">
          {/* ✅ Toggle Button */}

          {/* Your Header Content */}
          <div className="flex-1">
            <HeaderPage />
          </div>
        </Header>

        {/* Content */}
        <Content className="p-6 bg-gray-50">
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
