import React, { Component } from "react";
import nav from "../css/navbar.module.css";
import TicketContext from "../TicketContext";
import Swal from "sweetalert2";

class Navbar extends Component {
  static contextType = TicketContext;

  state = {
    isLoggedIn: false,
    // isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  };

  render() {
    return (
      <nav className={`navbar ${nav.Navbar}`}>
        <div className={`container ${nav.nav}`}>
          <a href="/Home" className={nav.navLogo}>
            {""}
          </a>
          <span className={nav.navberA}>
            <a href="/">首頁</a>
            <a href="/create">上傳</a>
            <a href="/">會員中心</a>
            {/* <a href="/login">登入</a> */}
            {this.state.isLoggedIn ? (
              // 如果已登入，則顯示注銷按钮
              //   <button onClick={this.handleLogout}>登出</button>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  this.handleLogout();
                  // alert("已登出");
                  // window.location.href = "/";
                  Swal.fire({
                    title: "已登出",
                    icon: "success",
                    confirmButtonText: "確定",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      // 在確定按鈕被按下後執行刷新網頁的程式碼
                      window.location.href = "/";
                    }
                  });
                }}
              >
                登出
              </a>
            ) : (
              // 如果未登入，則顯示登入按钮
              <a href="/login">登入</a>
            )}
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
