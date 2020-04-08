export default () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i&subset=latin-ext');
    @import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

    body.royal_preloader {
      background: none;
      visibility: hidden;
    }
    #royal_preloader {
      visibility: visible;
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      height: auto;
      margin: 0;
      z-index: 9999999999;
    }
    #royal_preloader.royal_preloader_number:before,
    #royal_preloader.royal_preloader_progress:before {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
    #royal_preloader.complete {
      opacity: 0;
      -webkit-transition: opacity 0.2s linear 0.5s;
      -moz-transition: opacity 0.2s linear 0.5s;
      -ms-transition: opacity 0.2s linear 0.5s;
      -o-transition: opacity 0.2s linear 0.5s;
      transition: opacity 0.2s linear 0.5s;
    }
    #royal_preloader.royal_preloader_line {
      height: 2px;
      bottom: auto;
    }

    #royal_preloader.royal_preloader_number .royal_preloader_percentage {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      width: 100px;
      height: 100px;
      border-width: 1px;
      border-style: solid;
      border-radius: 50%;
      line-height: 100px;
      font-size: 20px;
      font-family: Impact, Arial;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
      text-align: center;
    }
    #royal_preloader.royal_preloader_number .royal_preloader_percentage > div {
      position: absolute;
      top: -2px;
      right: -2px;
      bottom: -2px;
      left: -2px;
      border: 4px solid transparent;
      border-left-color: #ffffff;
      border-radius: 50%;
      -webkit-animation: rotate 0.8s linear infinite;
      -moz-animation: rotate 0.8s linear infinite;
      -ms-animation: rotate 0.8s linear infinite;
      -o-animation: rotate 0.8s linear infinite;
      animation: rotate 0.8s linear infinite;
    }

    #royal_preloader.royal_preloader_line .royal_preloader_loader {
      position: absolute;
      height: 100%;
      left: 0;
    }
    #royal_preloader.royal_preloader_line .royal_preloader_peg {
      position: absolute;
      right: 0;
      height: 100%;
      width: 100px;
      opacity: 0.5;
    }

    #royal_preloader.royal_preloader_text .royal_preloader_loader {
      color: #ffffff;
      position: absolute;
      top: 0;
      bottom: 0;
      opacity: 0.2;
      left: 50%;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      height: 80px;
      line-height: 80px;
      margin: auto;
      letter-spacing: -4px;
      font-size: 55px;
      white-space: nowrap;
    }
    #royal_preloader.royal_preloader_text .royal_preloader_loader div {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0%;
      background-color: #000000;
      opacity: 0.7;
      filter: alpha(opacity=70);
    }

    #royal_preloader.royal_preloader_scale_text .royal_preloader_loader {
      color: #ffffff;
      position: absolute;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      top: 0;
      bottom: 0;
      left: 50%;
      height: 32px;
      line-height: 32px;
      margin: auto;
      letter-spacing: 1px;
      font-size: 32px;
      white-space: nowrap;
    }

    #royal_preloader.royal_preloader_scale_text .royal_preloader_loader span {
      display: inline-block;
      -webkit-transform: scale(0);
      -moz-transform: scale(0);
      -ms-transform: scale(0);
      -o-transform: scale(0);
      transform: scale(0);
    }

    #royal_preloader.royal_preloader_scale_text
      .royal_preloader_loader
      span.loaded {
      -webkit-animation: scale 0.2s forwards;
      -moz-animation: scale 0.2s forwards;
      -ms-animation: scale 0.2s forwards;
      -o-animation: scale 0.2s forwards;
      animation: scale 0.2s forwards;
    }

    #royal_preloader.royal_preloader_logo .royal_preloader_loader {
      position: absolute;
      left: 50%;
      top: 50%;
      margin: 0px;
      overflow: hidden;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-size: 100%;
      border-radius: 5px;
    }
    #royal_preloader.royal_preloader_logo .royal_preloader_loader div {
      position: absolute;
      bottom: 0%;
      left: 0px;
      right: 0px;
      height: 100%;
      opacity: 0.7;
      filter: alpha(opacity=70);
    }
    #royal_preloader.royal_preloader_logo .royal_preloader_percentage {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 40px;
      line-height: 40px;
      margin: 0px;
      color: #072e77;
      text-align: center;
      font-family: Arial;
      font-size: 12px;
      font-weight: bold;
    }

    #royal_preloader.royal_preloader_progress .royal_preloader_percentage {
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      color: rgba(255, 255, 255, 0);
      text-align: center;
    }
    #royal_preloader.royal_preloader_progress .royal_preloader_loader {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      right: 0;
      width: 130px;
      height: 1px;
      margin: -10px auto auto auto;
      background: #202020;
    }
    #royal_preloader.royal_preloader_progress .royal_preloader_meter {
      width: 0;
      height: 100%;
      margin: auto;
      padding: 0;
    }

    @-webkit-keyframes rotate {
      0% {
        -webkit-transform: rotate(0);
      }
      100% {
        -webkit-transform: rotate(360deg);
      }
    }
    @-moz-keyframes rotate {
      0% {
        -moz-transform: rotate(0);
      }
      100% {
        -moz-transform: rotate(360deg);
      }
    }
    @-ms-keyframes rotate {
      0% {
        -ms-transform: rotate(0);
      }
      100% {
        -ms-transform: rotate(360deg);
      }
    }
    @-o-keyframes rotate {
      0% {
        -o-transform: rotate(0);
      }
      100% {
        -o-transform: rotate(360deg);
      }
    }
    @keyframes rotate {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    @-webkit-keyframes scale {
      0% {
        -webkit-transform: scale(0);
        opacity: 0;
      }
      50% {
        -webkit-transform: scale(2);
        opacity: 0.5;
      }
      100% {
        -webkit-transform: scale(1);
        opacity: 1;
      }
    }
    @-moz-keyframes scale {
      0% {
        -moz-transform: scale(0);
        opacity: 0;
      }
      50% {
        -moz-transform: scale(2);
        opacity: 0.5;
      }
      100% {
        -moz-transform: scale(1);
        opacity: 1;
      }
    }
    @-ms-keyframes scale {
      0% {
        -ms-transform: scale(0);
        opacity: 0;
      }
      50% {
        -ms-transform: scale(2);
        opacity: 0.5;
      }
      100% {
        -ms-transform: scale(1);
        opacity: 1;
      }
    }
    @-o-keyframes scale {
      0% {
        -o-transform: scale(0);
        opacity: 0;
      }
      50% {
        -o-transform: scale(2);
        opacity: 0.5;
      }
      100% {
        -o-transform: scale(1);
        opacity: 1;
      }
    }
    @keyframes scale {
      0% {
        transform: scale(0);
        opacity: 0;
      }
      50% {
        transform: scale(2);
        opacity: 0.5;
      }
      100% {
        transform: scale(1);
        opacity: 1;
      }
    }

    #menu-wrap {
      position: fixed;
      width: 100%;
      z-index: 5000;
      top: 0;
      left: 0;
    }
    #menu-wrap .container .columns {
      margin-top: 0;
      margin-bottom: 0;
    }
    .cbp-af-header.cbp-af-header-shrink .menu > ul > li a {
      padding: 30px 18px;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -o-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
    }
    .cbp-af-header.cbp-af-header-shrink .menu > ul > li > ul > li a {
      padding: 0;
      margin-left: 10px;
      margin-right: 10px;
      color: #c5c5c5;
      font-family: 'Open Sans';
      font-weight: 500;
      font-size: 10px;
      line-height: 18px;
      letter-spacing: 2px;
      text-transform: uppercase;
      width: calc(100% - 20px);
      display: block;
    }
    .cbp-af-header.cbp-af-header-shrink .menu > ul > li > ul > li a:hover {
      color: #fff;
    }
    .cbp-af-header.cbp-af-header-shrink .menu > ul > li > ul.normal-sub {
      width: 240px;
      left: auto;
      padding: 10px 0;
    }
    .cbp-af-header.cbp-af-header-shrink .menu > ul > li > ul.normal-sub > li {
      width: 100%;
    }
    .cbp-af-header.cbp-af-header-shrink .menu > ul > li > ul.normal-sub > li a {
      border: 0;
      padding: 1em 20px;
    }

    .menu-mobile {
      display: none;
      padding-top: 50px;
      padding-bottom: 40px;
    }

    .menu-mobile:after {
      content: '\f394';
      font-family: 'Ionicons';
      font-size: 30px;
      height: 40px;
      line-height: 40px;
      padding: 0;
      float: right;
      position: relative;
      top: 0;
      color: #fff;
      -webkit-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }

    .menu-dropdown-icon:before {
      content: '\f489';
      font-family: 'Ionicons';
      display: none;
      cursor: pointer;
      float: right;
      padding: 8px 12px;
      background: #212121;
      color: #fff;
      margin-top: 5px;
    }
    .menu-dropdown-icon-sub:before {
      content: '\f489';
      font-family: 'Ionicons';
      display: none;
      cursor: pointer;
      float: right;
      top: -2px;
      padding: 6px 10px;
      background: #414141;
      color: #fff;
    }

    .menu-container {
      position: relative;
      width: 100%;
      max-width: 1270px;
      margin: 0 auto;
      z-index: 10;
    }
    .menu {
      position: relative;
      width: 100%;
    }
    .menu img {
      width: 100%;
      display: block;
    }
    .menu > ul {
      margin: 0 auto;
      width: auto;
      float: right;
      list-style: none;
      padding: 0;
      box-sizing: border-box;
    }

    .menu > ul:before,
    .menu > ul:after {
      content: '';
      display: table;
    }

    .menu > ul:after {
      clear: both;
    }

    .menu > ul > li {
      float: left;
      padding: 0;
      margin: 0;
    }

    .menu > ul > li a {
      text-decoration: none;
      padding: 50px 18px;
      display: block;
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: 2px;
      color: #fff;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -o-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
    }

    .menu > ul > li a.social {
      text-decoration: none;
      padding: 50px 8px;
      display: block;
      font-weight: normal;
      letter-spacing: 0;
      color: #fff;
      display: inline-block;
      vertical-align: inherit;
      font: normal normal normal 12px/18px FontAwesome;
      text-rendering: auto;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -o-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
    }
    .menu > ul > li a.social.first-icon {
      padding-left: 50px;
    }
    .menu > ul > li > ul {
      width: 100%;
      background: #161616;
      padding: 30px 30px;
      padding-bottom: 20px;
      position: absolute;
      z-index: -20;
      left: 0;
      margin: 0;
      list-style: none;
      box-sizing: border-box;
      display: block;
      visibility: hidden;
      opacity: 0;
      height: 0;
      -webkit-transition: all 0.2s ease-in-out;
      -moz-transition: all 0.2s ease-in-out;
      transition: all 0.2s ease-in-out;
    }
    .menu > ul > li > ul.active {
      opacity: 1;
      z-index: 99999;
      height: auto;
      visibility: visible;
      height: auto;
    }

    .menu > ul > li > ul:before,
    .menu > ul > li > ul:after {
      content: '';
      display: table;
    }

    .menu > ul > li > ul:after {
      clear: both;
    }

    .menu > ul > li > ul > li {
      margin: 0;
      padding-bottom: 0;
      list-style: none;
      width: 25%;
      background: none;
      float: left;
    }
    .menu > ul > li > ul > li.three-col {
      width: 33.3333333333333%;
    }
    .menu > ul > li > ul > li.two-col {
      width: 50%;
    }
    .menu > ul > li > ul > li.full-width-sec {
      width: 100%;
    }
    .menu > ul > li > ul > li.two-thirds-col {
      width: 66.666666666666666%;
    }

    .menu > ul > li > ul > li p {
      padding: 0;
      padding-bottom: 10px;
      margin-left: 10px;
      margin-right: 10px;
      color: #fff;
      font-family: 'Open Sans';
      font-weight: 500;
      font-size: 12px;
      line-height: 18px;
      letter-spacing: 2px;
      text-transform: uppercase;
      width: calc(100% - 20px);
      display: block;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
    .menu > ul > li > ul > li a img {
      padding-bottom: 15px;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    .menu > ul > li > ul > li a:hover img {
      opacity: 0.8;
    }
    .menu > ul > li > ul > li p span {
      vertical-align: super;
      font-size: 9px;
      line-height: 9px;
      font-weight: 500;
    }
    .menu > ul > li > ul > li a {
      padding: 0;
      margin-left: 10px;
      margin-right: 10px;
      color: #c5c5c5;
      font-family: 'Open Sans';
      font-weight: 500;
      font-size: 10px;
      line-height: 18px;
      letter-spacing: 2px;
      text-transform: uppercase;
      width: calc(100% - 20px);
      display: block;
    }
    .menu > ul > li > ul > li a span {
      vertical-align: super;
      font-size: 9px;
      line-height: 9px;
      font-weight: 500;
    }
    .menu > ul > li > ul > li a:hover {
      color: #fff;
    }

    .menu > ul > li > ul > li > ul {
      display: block;
      padding: 0;
      margin: 10px 0 0;
      list-style: none;
      box-sizing: border-box;
    }

    .menu > ul > li > ul > li > ul:before,
    .menu > ul > li > ul > li > ul:after {
      content: '';
      display: table;
    }

    .menu > ul > li > ul > li > ul:after {
      clear: both;
    }

    .menu > ul > li > ul > li > ul > li {
      float: left;
      width: 100%;
      padding: 7px 0;
      margin: 0;
    }

    .menu > ul > li > ul > li > ul > li a {
      border: 0;
    }

    .menu > ul > li > ul.normal-sub {
      width: 220px;
      left: auto;
      padding: 10px 0;
    }
    .menu > ul > li > ul.normal-sub p {
      margin-left: 30px;
      margin-right: 30px;
      margin-top: 20px;
      margin-bottom: 7px;
      width: calc(100% - 60px);
    }
    .menu > ul > li > ul.normal-sub li a.subtitled {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 2px;
    }
    .menu > ul > li > ul.normal-sub li a.subtitled small {
      letter-spacing: 3px;
      color: #a9a9a9;
      font-size: 11px;
      text-transform: none;
    }

    .menu > ul > li > ul.normal-sub > li {
      position: relative;
      width: 100%;
    }

    .menu > ul > li > ul.normal-sub > li a {
      border: 0;
      padding: 1em 20px;
    }
    .menu > ul > li > ul.normal-sub > li a span.go-left-icon {
      position: absolute;
      left: 10px;
      top: 14px;
      width: 10px;
      height: 10px;
      z-index: 10;
      background-image: url('/arrow-white.svg');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 10px 10px;
    }
    .menu > ul > li > ul.normal-sub > li a span.go-right-icon {
      position: absolute;
      right: 10px;
      top: 14px;
      width: 10px;
      height: 10px;
      z-index: 10;
      background-image: url('/arrow-white.svg');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 10px 10px;
      -ms-transform: rotate(180deg);
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg);
    }
    .menu > ul > li > ul.normal-sub > li ul.go-left {
      display: none;
      position: absolute;
      left: -220px;
      top: -20px;
      z-index: 20;
      width: 220px;
      padding: 10px 20px;
      background: #161616;
    }
    .menu > ul > li > ul.normal-sub > li ul.go-right {
      display: none;
      position: absolute;
      left: 220px;
      top: -20px;
      z-index: 20;
      width: 220px;
      padding: 10px 20px;
      background: #161616;
    }
    .menu > ul > li > ul.normal-sub > li ul.go-left li,
    .menu > ul > li > ul.normal-sub > li ul.go-right li {
      padding: 0;
    }
    .menu > ul > li > ul.normal-sub > li ul.go-left li a,
    .menu > ul > li > ul.normal-sub > li ul.go-right li a {
      border: 0;
      padding: 1em 0;
    }
    .cbp-af-header.cbp-af-header-shrink
      .menu
      > ul
      > li
      > ul.normal-sub
      > li
      ul.go-left
      li
      a,
    .cbp-af-header.cbp-af-header-shrink
      .menu
      > ul
      > li
      > ul.normal-sub
      > li
      ul.go-right
      li
      a {
      border: 0;
      padding: 1em 0;
    }
    .cbp-af-header.cbp-af-header-shrink
      .menu
      > ul
      > li
      > ul.normal-sub
      > li
      ul.go-left
      li,
    .cbp-af-header.cbp-af-header-shrink
      .menu
      > ul
      > li
      > ul.normal-sub
      > li
      ul.go-right
      li {
      padding: 0;
    }

    #menu-wrap {
      position: fixed;
      width: 100%;
      z-index: 5000000;
      margin: 0 auto;
      top: 0;
      left: 0;
    }
    #menu-wrap .container .columns {
      margin-top: 0;
      margin-bottom: 0;
    }
    .menu-back {
      background: rgba(0, 0, 0, 0);
      height: 120px;
      padding-top: 60px;
      -webkit-transition: all 0.4s ease-out;
      -moz-transition: all 0.4s ease-out;
      -o-transition: all 0.4s ease-out;
      transition: all 0.4s ease-out;
    }
    .cbp-af-header {
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -o-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
    }

    .cbp-af-header.cbp-af-header-shrink {
      height: 80px;
      padding-top: 0;
      background: rgba(20, 20, 20, 0.93);
      -webkit-transition: all 0.4s ease-out;
      -moz-transition: all 0.4s ease-out;
      -o-transition: all 0.4s ease-out;
      transition: all 0.4s ease-out;
    }
    .cbp-af-header.cbp-af-header-shrink .cd-nav-trigger {
      top: 19px;
      right: 20px;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    .cbp-af-header.cbp-af-header-shrink .cd-nav-trigger span {
      background-color: white;
    }
    .cbp-af-header.cbp-af-header-shrink .logo {
      width: 98px;
      height: 20px;
      top: 30px;
      background-size: 98px 20px;
      -webkit-transition: all 0.4s ease-out;
      -moz-transition: all 0.4s ease-out;
      -o-transition: all 0.4s ease-out;
      transition: all 0.4s ease-out;
    }

    .logo {
      position: absolute;
      width: 137px;
      height: 28px;
      z-index: 10000;
      top: 46px;
      background-size: 137px 28px;
      -webkit-transition: all 0.4s ease-out;
      -moz-transition: all 0.4s ease-out;
      -o-transition: all 0.4s ease-out;
      transition: all 0.4s ease-out;
    }

    .menu {
      display: inline-block;
      z-index: 10;
    }
    .menu__item {
      line-height: 1;
      position: relative;
      display: block;
      margin: 30px 0;
      outline: none;
    }
    .menu__item-name,
    .menu__item-label {
      position: relative;
      display: inline-block;
    }
    .menu__item-name {
      font-family: 'Montserrat', sans-serif;
      font-size: 24px;
      font-weight: 700;
      letter-spacing: 3px;
      text-shadow: 2px 2px 2px #000;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -o-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
    }
    .menu__item-label {
      margin: 0 0 0 0.5em;
    }
    .menu--mohe .menu__item {
      display: grid;
      justify-content: center;
      margin: 3em 0;
      text-transform: lowercase;
      grid-template-columns: auto;
    }

    .menu--mohe .menu__item-name {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      white-space: pre;
      pointer-events: none;
      color: #fff;
      grid-area: 1 / 1 / 2 / 2;
    }

    .menu--mohe .menu__item-name span {
      display: inline-block;
    }

    .menu--mohe .menu__item-label {
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      font-size: 18px;
      letter-spacing: 2px;
      line-height: 30px;
      overflow: hidden;
      margin: 0;
      text-align: center;
      color: transparent;
      transition: color 0s 0.3s;
      grid-area: 1 / 1 / 2 / 2;
    }

    .menu--mohe .menu__item-label::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #000;
      transform: translate3d(-100%, 0, 0) translate3d(-1px, 0, 0);
      transition: transform 0.6s;
      transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    }

    .menu--mohe .menu__item:hover .menu__item-label::before,
    .menu--mohe .menu__item:focus .menu__item-label::before {
      transform: translate3d(100%, 0, 0) translate3d(1px, 0, 0);
    }

    @media screen and (max-width: 50em) {
      .menu--mohe .menu__item-label {
        font-size: 16px;
      }
      .menu__item-name {
        font-size: 20px;
        letter-spacing: 2px;
      }
      .menu--mohe .menu__item {
        margin: 2em 0;
      }
    }

    .nav-social {
      position: absolute;
      z-index: 20;
      right: 25px;
      bottom: 30px;
    }
    .nav-social li {
      display: inline-block;
      position: relative;
      margin-right: 12px;
    }
    .nav-social li a {
      position: relative;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 15px;
      line-height: 26px;
      letter-spacing: 1px;
      color: #fff;
      padding-left: 9px;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -o-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
    }
    .nav-social li a.twitter:hover {
      color: #00b6f1;
    }
    .nav-social li a.facebook:hover {
      color: #3b5998;
    }
    .nav-social li a.google:hover {
      color: #df4a32;
    }
    .nav-social li a:before {
      content: '';
      position: absolute;
      height: 4px;
      margin-top: -2px;
      border-radius: 50%;
      width: 4px;
      left: 0;
      top: 50%;
      z-index: 10;
    }
    .nav-social li a.twitter:before {
      background-color: #00b6f1;
    }
    .nav-social li a.facebook:before {
      background-color: #3b5998;
    }
    .nav-social li a.google:before {
      background-color: #df4a32;
    }

    .section {
      position: relative;
      width: 100%;
      display: block;
    }
    .ful-height {
      height: 100vh;
    }
    .big-height {
      height: 70vh;
    }
    .padding-top-from-nav {
      padding-top: 240px;
    }
    .padding-top-bottom {
      padding-top: 100px;
      padding-bottom: 100px;
    }
    .padding-top {
      padding-top: 100px;
    }
    .padding-bottom {
      padding-bottom: 100px;
    }
    .padding-top-bottom-sep {
      padding-top: 160px;
      padding-bottom: 160px;
    }
    .background-dark {
      background-color: #121212;
    }
    .background-black {
      background-color: #020202;
    }

    .home-text-freelance h1 {
      position: relative;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 22px;
      line-height: 30px;
      letter-spacing: 1px;
      font-style: italic;
    }
    .home-text-freelance h1 span {
      font-size: 95px;
      line-height: 110px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-style: normal;
      color: #fff;
      letter-spacing: 0;
      text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.1);
    }

    .home-text-wrap {
      position: absolute;
      width: 100%;
      top: 50%;
      margin-top: 40px;
      left: 0;
      z-index: 20;
      -webkit-transform: translateY(-50%);
      -moz-transform: translateY(-50%);
      -ms-transform: translateY(-50%);
      -o-transform: translateY(-50%);
      transform: translateY(-50%);
    }

    .home-carousel-wrap {
      position: relative;
      width: 100%;
      height: 70vh;
      overflow: hidden;
      z-index: 2;
    }
    #sync1 .item {
      position: relative;
      width: 100%;
      display: block;
      height: 70vh;
      background-size: cover;
      background-position: center center;
    }
    #sync1 .item.background-home-image-1 {
      background-image: url('/1.jpg');
    }
    #sync1 .item.background-home-image-2 {
      background-image: url('/2.jpg');
    }

    #sync2 {
      position: absolute;
      width: 42px;
      top: 50%;
      margin-top: 140px;
      left: 50%;
      margin-left: -21px;
    }
    #sync2 .item {
      height: 15px;
      margin-left: 5px;
      margin-right: 5px;
      cursor: pointer;
      z-index: 200;
      cursor: pointer;
      width: 3px;
      background: #fff;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    #sync2 .item:hover {
      height: 25px;
    }
    #sync2 .synced .item {
      height: 25px;
    }

    .scroll-to-top {
      position: fixed;
      cursor: pointer;
      top: 120px;
      opacity: 0.8;
      right: 40px;
      width: 30px;
      height: 30px;
      display: none;
      z-index: 9999;
      background-image: url('/up-arrow.png');
      background-position: center center;
      background-repeat: no-repeat;
      background-size: 30px 30px;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    .scroll-to-top:hover {
      opacity: 1;
    }

    .title {
      position: releative;
      display: block;
    }
    .title h3 {
      text-align: left;
      padding-bottom: 40px;
    }
    .title h5 {
      text-align: left;
      padding-bottom: 40px;
      color: #999;
    }
    .title h6 {
      text-align: left;
      padding-bottom: 40px;
      color: #999;
    }
    .title .list {
      position: releative;
      display: block;
    }
    .title .list li {
      position: relative;
      padding-left: 70px;
      display: block;
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      font-size: 12px;
      letter-spacing: 2px;
      line-height: 25px;
      text-transform: uppercase;
      color: #999;
      margin-bottom: 3px;
    }
    .title .list li strong {
      font-weight: 900;
      color: #fff;
    }
    .title .list li:before {
      position: absolute;
      content: '';
      left: 50px;
      width: 10px;
      top: 50%;
      margin-top: -1px;
      height: 2px;
      z-index: 1;
    }
    .subtitle-big {
      text-align: left;
      font-family: 'Lato', sans-serif;
      font-weight: 300;
      font-size: 26px;
      line-height: 36px;
      color: #fff;
    }
    .subtitle-small {
      text-align: left;
      font-family: 'Lato', sans-serif;
      font-weight: 300;
      font-size: 22px;
      line-height: 32px;
      color: #fff;
    }
    .img-wrap img {
      width: 100%;
      display: block;
    }

    .video-wrapper,
    figure.vimeo,
    figure.youtube {
      margin: 0;
      position: relative;
      padding-bottom: 56.25%;
      padding-top: 0;
      height: 0;
      overflow: hidden;
    }
    .video-wrapper iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
    figure.youtube a img,
    figure.vimeo a img {
      position: absolute;
      top: 0;
      left: 0;
      width: auto;
      height: 100%;
      max-width: none;
    }
    figure.vimeo a:after,
    figure.youtube a:after {
      content: '';
      width: 60px;
      height: 60px;
      background: #fff;
      z-index: 9;
      position: absolute;
      top: 50%;
      left: 50%;
      margin: -30px 0 0 -30px;
      border-radius: 50%;
      -webkit-box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.2);
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    figure.vimeo:hover a:after,
    figure.youtube:hover a:after {
      -webkit-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
      box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
    }
    figure.vimeo a:before,
    figure.youtube a:before {
      content: '';
      width: 0;
      height: 0;
      border-top: 9px solid transparent;
      border-bottom: 9px solid transparent;
      z-index: 10;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -3px;
      margin-top: -7px;
      display: block;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    figure.vimeo:hover a:before,
    figure.youtube:hover a:before {
      border-left: 10px solid #fff;
    }
    figure.vimeo a:hover img,
    figure.youtube a:hover img {
      -webkit-transition: all 0.4s;
      transition: all 0.4s;
    }
    figure.vimeo a img,
    figure.youtube a img {
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
      -webkit-transform: scale(1);
      transform: scale(1);
    }

    .about-wrap {
      position: relative;
      width: 100%;
    }
    .about-wrap h6 {
      text-align: left;
      padding-left: 70px;
      padding-bottom: 20px;
      font-weight: 400;
      color: #fff;
    }
    .about-wrap p {
      text-align: left;
      padding-left: 70px;
    }
    .about-wrap .about-icon {
      position: absolute;
      top: 0;
      left: 0;
      width: 64px;
      height: 64px;
      z-index: 3;
    }
    // svg * {
    //   fill: none;
    //   stroke: currentColor;
    // }

    .content-team {
      position: relative;
      width: 100%;
      display: block;
      height: 460px;
      --pieces-height: 460px;
    }

    .slideshow-team {
      position: relative;
      width: 50%;
      display: inline-block;
      float: right;
    }

    .slide-team {
      position: relative;
      width: 100%;
      opacity: 0;
      background-size: cover;
      background-position: center center;
      background-repeat: no-repeat;
    }

    .pieces {
      flex: none;
      opacity: 1;
      height: var(--pieces-height);
      width: 100%;
      position: relative;
      display: flex;
      flex-wrap: wrap;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center center;
    }

    .piece {
      pointer-events: none;
    }

    .menu-team {
      position: relative;
      width: 50%;
      display: inline-block;
      float: left;
    }

    .menu__item-team {
      font-size: 22px;
      line-height: 24px;
      display: block;
      margin-bottom: 15px;
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      color: #fff;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }

    .menu__item-team span {
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 14px;
      line-height: 14px;
      font-style: italic;
      letter-spacing: 1px;
      color: #fff;
    }

    #owl-sep-1 {
      position: relative;
      width: 100%;
      margin: 0 auto;
      display: block;
    }
    #owl-sep-1 .item {
      position: relative;
      width: 100%;
      margin: 0 auto;
      z-index: 2;
      display: block;
    }
    .quote-sep {
      position: relative;
      margin: 0 auto;
      width: 100%;
      text-align: center;
      overflow: hidden;
      display: block;
      padding-top: 30px;
      padding-bottom: 50px;
      background-image: url('/qu.png');
      background-repeat: no-repeat;
      background-position: top center;
    }
    .quote-sep h4 {
      text-align: center;
      margin: 0 auto;
      font-family: 'Lato', sans-serif;
      color: #fff;
      font-weight: 300;
      font-style: italic;
      font-size: 22px;
      line-height: 34px;
      width: 100%;
      max-width: 830px;
    }
    .quote-sep h6 {
      text-align: center;
      margin: 0 auto;
      color: #fff;
      padding-top: 40px;
      width: 100%;
      font-weight: 400;
    }
    #owl-sep-1.owl-theme .owl-controls {
      position: absolute;
      left: 0;
      text-align: center;
      bottom: 0;
      margin: 0 auto;
      z-index: 100;
      width: 100%;
      z-index: 20;
    }
    #owl-sep-1.owl-theme .owl-controls .owl-page span {
      background-color: rgba(255, 255, 255, 0.3);
      text-align: center;
      width: 35px;
      height: 2px;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }

    #owl-logos {
      position: relative;
      width: calc(100% - 30px);
      overflow: hidden;
      margin: 0 auto;
      text-align: center;
    }
    #owl-logos .item {
      position: relative;
      margin-left: 15px;
      margin-right: 15px;
      overflow: hidden;
      text-align: center;
    }
    #owl-logos .item img {
      width: 70px;
      display: block;
      margin: 0 auto;
      text-align: center;
      cursor: pointer;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }

    .parallax {
      background-repeat: repat;
      background-attachment: fixed;
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      width: 100%;
    }
    @media only screen and (min-width: 1930px) {
      .parallax {
        background-size: cover;
      }
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1200px) and (orientation: landscape) {
      .parallax {
        background-size: cover;
        background-attachment: scroll;
        background-position: top center !important;
      }
    }
    @media only screen and (max-width: 1400px) {
      .parallax {
        background-size: cover;
        background-attachment: scroll;
        background-position: top center !important;
      }
    }

    .parallax-1 {
      background-repeat: repat;
      background-attachment: fixed;
      background-size: cover;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      width: 100%;
    }
    @media only screen and (min-width: 1930px) {
      .parallax-1 {
        background-size: cover;
      }
    }
    @media only screen and (min-device-width: 768px) and (max-device-width: 1200px) and (orientation: landscape) {
      .parallax-1 {
        background-size: cover;
        background-attachment: scroll;
        background-position: top center !important;
      }
    }
    @media only screen and (max-width: 1400px) {
      .parallax-1 {
        background-size: cover;
        background-attachment: scroll;
        background-position: top center !important;
      }
    }

    .z-index-bigger {
      z-index: 5000;
    }
    .dark-over {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 5;
      background-color: rgba(0, 0, 0, 0.75);
    }
    .dark-over-2 {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 5;
      background-color: rgba(0, 0, 0, 0.35);
    }

    #projects-grid {
      position: relative;
      text-align: center;
      margin: 0 auto;
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }
    #projects-grid.in-container {
      max-width: 1320px;
    }
    #projects-grid.have-space {
      width: calc(100% - 50px);
      padding-top: 10px;
      padding-bottom: 25px;
    }
    #projects-grid:after {
      content: '';
      display: block;
      clear: both;
    }
    .portfolio-box-1 {
      position: relative;
      float: left;
      width: 33.3333333333%;
      display: inline-block;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      overflow: hidden;
      margin-left: -1px;
      -webkit-transform: translate3d(1px, 0, 0);
      transform: translate3d(1px, 0, 0);
    }
    .portfolio-box-1.full-width {
      width: calc(100% - 50px);
      margin-left: 0;
      margin: 25px;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
    .portfolio-box-1.half-width {
      width: 50%;
    }
    .portfolio-box-1.quarter-width {
      width: 25%;
    }
    .portfolio-box-1.have-space {
      margin: 25px;
      margin-left: 24px;
      width: calc(33.3333333333% - 50px);
    }
    .portfolio-box-1.half-width.have-space {
      margin: 25px;
      margin-left: 24px;
      width: calc(50% - 50px);
    }
    .portfolio-box-1.quarter-width.have-space {
      margin: 25px;
      margin-left: 24px;
      width: calc(25% - 50px);
    }
    .portfolio-box-1 .mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 101%;
      z-index: 1;
      background-color: #212121;
      opacity: 0;
      -webkit-transition: all 200ms linear;
      -moz-transition: all 200ms linear;
      -o-transition: all 200ms linear;
      -ms-transition: all 200ms linear;
      transition: all 200ms linear;
    }
    .portfolio-box-1.full-width .mask {
      opacity: 0.4;
    }
    .portfolio-box-1 .mask.video-mask {
      background-image: url('/play.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 32px 32px;
    }
    .portfolio-box-1 .mask.gallery-mask {
      background-image: url('/more.png');
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 32px 32px;
    }
    .portfolio-box-1:hover .mask {
      opacity: 0.9;
    }
    .portfolio-box-1 h3 {
      position: absolute;
      left: 25px;
      bottom: 40px;
      font-family: 'Poppins', sans-serif;
      letter-spacing: 1px;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
      text-align: left;
      z-index: 3;
      letter-spacing: -1px;
      color: #fff;
      opacity: 0;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    .portfolio-box-1:hover h3 {
      left: 40px;
      opacity: 1;
    }
    .portfolio-box-1 h3 span {
      font-weight: 300;
      font-size: 10px;
      letter-spacing: 2px;
    }
    .portfolio-box-1 img {
      width: 100%;
      display: block;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    .portfolio-box-1:hover img {
      -webkit-transform: scale(1.05);
      -moz-transform: scale(1.05);
      -ms-transform: scale(1.05);
      -o-transform: scale(1.05);
      transform: scale(1.05);
    }

    #portfolio-filter {
      position: relative;
      text-align: center;
      z-index: 20;
      width: 100%;
    }
    #filter {
      position: relative;
      display: inline-block;
      text-align: center;
    }
    #filter li {
      display: inline-block;
      text-align: center;
      margin-right: 7px;
      margin-left: 7px;
    }
    #filter:after {
      content: '';
      display: block;
      clear: both;
    }
    #filter li a {
      position: relative;
      display: inline-block;
      overflow: hidden;
      letter-spacing: 1px;
      padding-bottom: 7px;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      text-align: center;
      outline: none;
      color: #999;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-style: italic;
      font-size: 20px;
      line-height: 28px;
      text-decoration: none;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    #filter li a:hover {
      color: #fff;
    }
    #filter li a:before {
      position: absolute;
      width: 100%;
      left: -100%;
      bottom: 0;
      height: 13px;
      content: '';
      z-index: -1;
      opacity: 0.7;
      -webkit-transition: all 250ms linear;
      -moz-transition: all 250ms linear;
      -o-transition: all 250ms linear;
      -ms-transition: all 250ms linear;
      transition: all 250ms linear;
    }
    #filter li a.current:before {
      left: 0;
    }
    #filter li a.current {
      color: #fff;
    }
    #filter li a:hover:before {
      left: 0;
    }
    .isotope-item {
      z-index: 2;
    }
    .isotope-hidden.isotope-item {
      pointer-events: none;
      z-index: 1;
    }
    .isotope,
    .isotope .isotope-item {
      -webkit-transition-duration: 0.6s;
      -moz-transition-duration: 0.6s;
      transition-duration: 0.6s;
    }
    .isotope {
      -webkit-transition-property: height, width;
      -moz-transition-property: height, width;
      transition-property: height, width;
    }
    .isotope .isotope-item {
      -webkit-transition-property: -webkit-transform, opacity;
      -moz-transition-property: -moz-transform, opacity;
      -ms-transition-property: -ms-transform, opacity;
      -o-transition-property: top, left, opacity;
      transition-property: transform, opacity;
    }

    .project-nav-wrap {
      position: relative;
      display: block;
      margin: 0 auto;
      text-align: center;
      background-repeat: no-repeat;
      background-position: center center;
      background-image: url('/line-nav.png');
      background-size: 35px 120px;
    }
    .project-nav-wrap .left-nav {
      position: relative;
      display: inline-block;
      margin-right: 30px;
      width: 180px;
      height: 120px;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      letter-spacing: 2px;
      text-align: right;
      font-size: 50px;
      line-height: 80px;
      vertical-align: text-top;
      color: #999;
      -webkit-transition: all 250ms linear;
      -moz-transition: all 250ms linear;
      -o-transition: all 250ms linear;
      -ms-transition: all 250ms linear;
      transition: all 250ms linear;
    }
    .project-nav-wrap .left-nav:hover {
      color: #fff;
    }
    .project-nav-wrap .right-nav {
      position: relative;
      display: inline-block;
      margin-left: 30px;
      width: 180px;
      height: 120px;
      font-size: 50px;
      line-height: 160px;
      vertical-align: text-bottom;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      letter-spacing: 2px;
      text-align: left;
      color: #999;
      -webkit-transition: all 250ms linear;
      -moz-transition: all 250ms linear;
      -o-transition: all 250ms linear;
      -ms-transition: all 250ms linear;
      transition: all 250ms linear;
    }
    .project-nav-wrap .right-nav:hover {
      color: #fff;
    }
    .project-nav-wrap .left-nav .text-on-hover,
    .project-nav-wrap .right-nav .text-on-hover {
      position: absolute;
      z-index: 2;
      width: 100%;
      opacity: 0;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
      color: #fff;
      -webkit-transition: all 250ms linear;
      -moz-transition: all 250ms linear;
      -o-transition: all 250ms linear;
      -ms-transition: all 250ms linear;
      transition: all 250ms linear;
    }
    .project-nav-wrap .left-nav .text-on-hover {
      text-align: right;
      padding-right: 50px;
      right: 0;
      bottom: 130px;
    }
    .project-nav-wrap .left-nav .text-on-hover:before {
      font-family: FontAwesome;
      padding-right: 10px;
      font-size: 15px;
      content: '\f104';
    }
    .project-nav-wrap .left-nav:hover .text-on-hover {
      opacity: 1;
      bottom: 110px;
    }
    .project-nav-wrap .right-nav .text-on-hover {
      text-align: left;
      padding-left: 50px;
      left: 0;
      top: 130px;
    }
    .project-nav-wrap .right-nav .text-on-hover:after {
      font-family: FontAwesome;
      padding-left: 10px;
      font-size: 15px;
      content: '\f105';
    }
    .project-nav-wrap .right-nav:hover .text-on-hover {
      opacity: 1;
      top: 110px;
    }

    .blog-page-wrapper {
      position: relative;
      display: block;
      width: 100%;
    }
    .date-time-blog-page {
      position: relative;
      display: inline-block;
      width: 180px;
      float: left;
      padding-top: 10px;
      padding-bottom: 10px;
      font-weight: 700;
      letter-spacing: 1px;
      color: #999;
      font-family: 'Lato', sans-serif;
      font-size: 13px;
      line-height: 26px;
    }

    .tooltip {
      position: relative;
      display: inline-block;
      float: left;
      z-index: 1800;
    }
    .tooltip__trigger {
      cursor: pointer;
      position: relative;
    }
    .tooltip__trigger-text {
      display: block;
      padding-top: 10px;
      padding-bottom: 10px;
      font-weight: 700;
      letter-spacing: 1px;
      color: #fff;
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      line-height: 26px;
      pointer-events: none;
    }
    .tooltip__base {
      position: absolute;
      bottom: 2em;
      right: 0;
      margin-right: -400px;
      width: 460px;
      height: 360px;
      opacity: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      overflow: hidden;
    }
    .tooltip__content {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 370px;
      opacity: 0;
      overflow: hidden;
      border-radius: 10px;
    }
    .tooltip__content img {
      width: 100%;
      display: block;
      margin: 0 auto;
      text-align: center;
    }
    .tooltip__shape,
    .tooltip__deco {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      overflow: hidden;
    }

    .blog-pagination {
      position: relative;
      width: 100%;
      display: block;
    }
    .blog-pagination li {
      display: inline-block;
      margin-left: 5px;
      margin-right: 5px;
    }
    .blog-pagination li p {
      font-weight: 400;
      letter-spacing: 1px;
      color: #fff;
      font-family: 'Lato', sans-serif;
      font-size: 26px;
      line-height: 36px;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    .blog-pagination li p.curent {
      opacity: 0.3;
    }
    .blog-pagination li p.no-shadow {
      text-shadow: none;
      color: #fff;
    }
    .blog-pagination li p.no-shadow:hover {
      text-shadow: none;
      color: #fff;
    }
    .blog-pagination li p.curent:hover {
      text-shadow: none;
      color: #fff;
    }
    .arrow-icons {
      font-family: 'FontAwesome';
      font-size: 20px;
      line-height: 36px;
      color: #fff;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    .arrow-icons.curent {
      opacity: 0.3;
    }
    .arrow-icons.curent:hover {
      opacity: 0.3;
      text-shadow: none;
      color: #fff;
    }
    .blog-pagination li:first-child {
      margin-right: 30px;
    }
    .blog-pagination li:last-child {
      margin-left: 30px;
    }

    .post-wrapper {
      position: relative;
      width: 100%;
    }
    .post-wrapper img {
      width: 100%;
      display: block;
      margin-bottom: 25px;
    }
    .post-wrapper h6 {
      text-align: left;
    }
    .post-wrapper p.larger {
      text-align: left;
      font-size: 18px;
      line-height: 24px;
      font-style: italic;
    }
    .post-wrapper p {
      text-align: left;
      padding-bottom: 25px;
    }
    #owl-blog-slider {
      position: relative;
      width: 100%;
      margin: 0 auto;
      text-align: center;
    }
    #owl-blog-slider .item {
      position: relative;
      width: 100%;
    }
    #owl-blog-slider .item img {
      width: 100%;
      display: block;
      height: auto;
    }
    #owl-blog-slider.owl-theme .owl-controls {
      position: absolute;
      left: 0;
      text-align: center;
      bottom: 30px;
      z-index: 100;
      width: 100%;
      z-index: 20;
    }
    #owl-blog-slider.owl-theme .owl-controls .owl-page span {
      background-color: #fff;
      border-radius: 50%;
      width: 6px;
      height: 6px;
      margin-bottom: 10px;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }

    .post-wrapper blockquote {
      font-size: 18px;
      line-height: 25px;
      font-style: italic;
      padding-top: 0;
      padding-bottom: 0;
      color: #ccc;
      padding-left: 40px;
      margin-top: 15px;
      margin-bottom: 40px;
    }
    .post-wrapper img.half-post-image-left {
      width: 50%;
      display: block;
      float: left;
      margin-right: 25px;
      margin-bottom: 25px;
    }
    .image-title-left {
      font-size: 12px;
      line-height: 12px;
      font-style: italic;
      font-weight: 400;
      width: 100%;
      text-align: left;
      display: block;
      float: left;
      font-family: 'Lato', sans-serif;
      color: #ccc;
      margin-bottom: 10px;
    }
    .post-wrapper img.half-post-image-right {
      width: 50%;
      display: block;
      float: right;
      margin-left: 25px;
      margin-bottom: 25px;
    }
    .image-title-right {
      font-size: 12px;
      line-height: 12px;
      font-style: italic;
      font-weight: 400;
      width: 100%;
      text-align: right;
      display: block;
      float: right;
      font-family: 'Lato', sans-serif;
      color: #ccc;
      margin-bottom: 10px;
    }
    .post-wrapper figure {
      margin-bottom: 25px;
    }

    .num-of-com {
      position: relative;
      display: block;
      width: 100%;
      color: #ccc;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      text-align: left;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: 1px;
      padding-top: 40px;
    }
    .num-of-com span {
      padding-right: 10px;
      font-size: 55px;
      line-height: 20px;
      font-style: italic;
    }
    .comm-link {
      position: relative;
      display: inline-block;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      text-align: left;
      font-size: 17px;
      line-height: 20px;
      font-style: italic;
      margin-top: 10px;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    .comm-link:hover {
      opacity: 0.6;
    }

    .sidebar {
      position: relative;
      width: 100%;
    }
    .sidebar h6 {
      padding-bottom: 20px;
      text-align: left;
    }
    .sidebar-sep {
      position: relative;
      width: 100%;
      padding-bottom: 50px;
    }
    .sidebar-search {
      position: relative;
      width: 100%;
      display: block;
    }
    .sidebar-search input {
      position: relative;
      width: calc(100% - 40px);
      padding-left: 20px;
      padding-right: 20px;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      letter-spacing: 1px;
      font-size: 13px;
      line-height: 24px;
      padding-bottom: 15px;
      background: transparent;
      border: none;
      color: #ccc;
      -webkit-transition: border-bottom 0.3s, color 0.3s;
      transition: border-bottom 0.3s, color 0.3s;
    }
    .sidebar-search input {
      border-bottom: 1px solid rgba(220, 220, 220, 0.2);
    }
    .sidebar-search input:focus {
      outline: none !important;
    }
    .sidebar-search input:focus {
      outline: none !important;
    }
    .sidebar-search input:-ms-input-placeholder {
      font-size: 11px;
      letter-spacing: 1px;
      color: #ccc;
    }
    .sidebar-search input::-moz-placeholder {
      font-size: 11px;
      letter-spacing: 1px;
      color: #ccc;
    }
    .sidebar-search input:-moz-placeholder {
      font-size: 11px;
      letter-spacing: 1px;
      color: #ccc;
    }
    .sidebar-search input::-webkit-input-placeholder {
      font-size: 11px;
      letter-spacing: 1px;
      color: #ccc;
    }
    .sidebar-search button {
      position: absolute;
      font-family: 'FontAwesome';
      width: 30px;
      right: 0;
      top: 0;
      height: 30px;
      font-size: 12px;
      line-height: 30px;
      text-align: center;
      border-radius: 50%;
      padding: 0;
      margin: 0;
      border: none;
      color: #fff;
      z-index: 2;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    .sidebar-search button:hover {
      opacity: 0.6;
    }
    .sidebar-search button:focus,
    .sidebar-search button:active {
      border: none;
      outline: none;
    }
    .sidebar-list-one {
      position: relative;
      width: 100%;
      display: block;
    }
    .sidebar-list-one li {
      position: relative;
      display: block;
      padding-left: 45px;
      margin-bottom: 20px;
    }
    .sidebar-list-one li a {
      font-family: 'Lato', sans-serif;
      font-size: 15px;
      line-height: 22px;
      font-weight: 500;
      color: #ccc;
      text-align: left;
      letter-spacing: 1px;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    .sidebar-list-one li a:hover {
      padding-left: 5px;
    }
    .sidebar-list-one li:last-child {
      margin-bottom: 0;
    }
    .sidebar-list-one li:before {
      position: absolute;
      padding: 0;
      margin: 0;
      content: '';
      width: 4px;
      height: 4px;
      border-radius: 50%;
      left: 20px;
      top: 8px;
      z-index: 2;
    }
    .sidebar-list-two {
      position: relative;
      width: 100%;
      display: block;
    }
    .sidebar-list-two li {
      position: relative;
      display: inline-block;
      margin-right: 5px;
      margin-bottom: 14px;
    }
    .sidebar-list-two li a {
      font-family: 'Lato', sans-serif;
      font-size: 13px;
      line-height: 13px;
      font-weight: 500;
      color: #ccc;
      border-radius: 20px;
      border: 2px solid #ccc;
      padding: 5px 15px;
      text-align: center;
      letter-spacing: 1px;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    .sidebar-list-two li a:hover {
      color: #fff;
    }

    .comment {
      position: relative;
      display: block;
      width: 100%;
      padding-bottom: 70px;
    }
    .comment.subcomment {
      width: calc(100% - 70px);
      margin-left: 70px;
    }
    .comment img {
      position: absolute;
      display: block;
      width: 80px;
      height: 80px;
      top: 0;
      left: 0;
      border-radius: 50%;
    }
    .comment .time {
      position: relative;
      padding-left: 110px;
      font-style: italic;
      padding-top: 15px;
      font-family: 'Lato', sans-serif;
      font-size: 13px;
      line-height: 13px;
      padding-bottom: 3px;
      color: #ccc;
    }
    .comment h6 {
      text-align: left;
      padding-bottom: 20px;
    }
    .comment h6,
    .comment p {
      padding-left: 110px;
    }
    .comment a {
      position: relative;
      font-family: 'Lato', sans-serif;
      font-size: 13px;
      line-height: 13px;
      font-weight: 700;
      display: block;
      float: right;
      text-align: right;
      margin-top: 30px;
      opacity: 0.6;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    .comment a:hover {
      opacity: 1;
    }

    #ajax-form {
      width: 100%;
      font-family: 'Lato', sans-serif;
      font-size: 10px;
      line-height: 14px;
      color: #ccc;
      margin: 0 auto;
    }
    #ajax-form label {
      display: block;
      font-family: 'Lato', sans-serif;
      font-size: 14px;
      line-height: 30px;
    }
    #ajax-form input {
      position: relative;
      width: calc(100% - 40px);
      padding-left: 20px;
      padding-right: 20px;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      letter-spacing: 1px;
      font-size: 13px;
      line-height: 24px;
      padding-bottom: 15px;
      background: transparent;
      border: none;
      color: #ccc;
      -webkit-transition: border-bottom 0.3s, color 0.3s;
      transition: border-bottom 0.3s, color 0.3s;
    }
    #ajax-form textarea {
      width: calc(100% - 40px);
      padding-left: 20px;
      padding-right: 20px;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      letter-spacing: 1px;
      font-size: 13px;
      line-height: 24px;
      background: transparent;
      height: 100px;
      border: none;
      color: #ccc;
      -webkit-transition: border-bottom 0.3s, color 0.3s;
      transition: border-bottom 0.3s, color 0.3s;
    }
    #ajax-form textarea,
    #ajax-form input {
      border-bottom: 1px solid rgba(220, 220, 220, 0.2);
    }
    .error {
      font: 11px/22px 'Open Sans', sans-serif;
      text-transform: uppercase;
      letter-spacing: 1px;
      display: none;
      color: #636363;
    }
    #ajaxsuccess {
      background: #f2f2f2;
      color: #ccc;
      font: 20px/60px 'Open Sans', sans-serif;
      height: 60px;
      display: none;
      padding-left: 10px;
      width: 100%;
      margin-left: auto;
      margin-right: auto;
      margin-top: 30px;
    }
    .text-align-left {
      text-align: left;
      padding-top: 10px;
      margin-left: 25px;
      margin-right: 25px;
    }
    #ajax-form textarea:active,
    #ajax-form input:active {
      color: #ccc;
    }
    #ajax-form textarea:active,
    #ajax-form input:hover {
      color: #ccc;
    }
    #ajax-form textarea:focus,
    #ajax-form input:focus {
      outline: none !important;
    }
    #ajax-form input:-ms-input-placeholder {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #ccc;
    }
    #ajax-form input::-moz-placeholder {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #ccc;
    }
    #ajax-form input:-moz-placeholder {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #ccc;
    }
    #ajax-form input::-webkit-input-placeholder {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #ccc;
    }
    #ajax-form textarea:-ms-input-placeholder {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #ccc;
    }
    #ajax-form textarea::-moz-placeholder {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #ccc;
    }
    #ajax-form textarea:-moz-placeholder {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #ccc;
    }
    #ajax-form textarea::-webkit-input-placeholder {
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #ccc;
    }
    #ajax-form button {
      background: #323232;
      color: #fff;
      font-size: 13px;
      padding: 13px 25px;
      max-width: 150px;
    }
    #ajax-form button:hover {
      color: #fff;
    }
    #ajax-form button:focus,
    #ajax-form button:active {
      border: none;
      outline: none;
    }

    .button-effect {
      min-width: 150px;
      max-width: 200px;
      display: block;
      border: none;
      background: none;
      color: inherit;
      vertical-align: middle;
      cursor: pointer;
      position: relative;
      float: left;
      z-index: 1;
      -webkit-backface-visibility: hidden;
      -moz-osx-font-smoothing: grayscale;
    }
    .button-effect:focus {
      outline: none;
    }
    .button-effect > span {
      vertical-align: middle;
    }
    .button--moema {
      padding: 14px 26px;
      border-radius: 50px;
      text-align: center;
      background: #fff;
      letter-spacing: 2px;
      color: #000;
      -webkit-transition: background-color 0.3s, color 0.3s;
      transition: background-color 0.3s, color 0.3s;
    }
    .button--moema::before {
      content: '';
      position: absolute;
      top: -20px;
      left: -20px;
      bottom: -20px;
      right: -20px;
      background: inherit;
      border-radius: 50px;
      z-index: -1;
      opacity: 0.4;
      -webkit-transform: scale3d(0.8, 0.5, 1);
      transform: scale3d(0.8, 0.5, 1);
    }
    .button--moema:hover {
      -webkit-transition: background-color 0.3s 0s, color 0.3s 0s;
      transition: background-color 0.3s 0s, color 0.3s 0s;
      color: #fff;
      -webkit-animation: anim-moema-1 0.6s forwards;
      animation: anim-moema-1 0.6s forwards;
    }
    .button--moema:hover::before {
      -webkit-animation: anim-moema-2 0.6s 0.5s forwards;
      animation: anim-moema-2 0.6s 0.5s forwards;
    }
    @-webkit-keyframes anim-moema-1 {
      60% {
        -webkit-transform: scale3d(0.8, 0.8, 1);
        transform: scale3d(0.8, 0.8, 1);
      }
      85% {
        -webkit-transform: scale3d(1.2, 1.2, 1);
        transform: scale3d(1.2, 1.2, 1);
      }
      100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }
    @keyframes anim-moema-1 {
      60% {
        -webkit-transform: scale3d(0.8, 0.8, 1);
        transform: scale3d(0.8, 0.8, 1);
      }
      85% {
        -webkit-transform: scale3d(1.2, 1.2, 1);
        transform: scale3d(1.2, 1.2, 1);
      }
      100% {
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }
    @-webkit-keyframes anim-moema-2 {
      to {
        opacity: 0;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }
    @keyframes anim-moema-2 {
      to {
        opacity: 0;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
      }
    }

    #google-container {
      position: relative;
      width: 100%;
      height: 50vh;
    }
    #cd-google-map {
      position: relative;
      width: 100%;
      display: block;
    }
    #cd-google-map address {
      position: absolute;
      width: 100%;
      bottom: 0;
      left: 0;
      padding-top: 25px;
      padding-bottom: 25px;
      background-color: rgba(0, 0, 0, 0.4);
      font-family: 'Lato', sans-serif;
      text-transform: uppercase;
      letter-spacing: 2px;
      font-weight: 500;
      font-size: 10px;
      line-height: 17px;
      text-align: center;
      color: #fff;
    }
    #cd-zoom-in,
    #cd-zoom-out {
      height: 32px;
      width: 32px;
      cursor: pointer;
      margin-left: 20px;
      background-repeat: no-repeat;
      background-size: 32px 64px;
      opacity: 0.7;
      background-image: url('/cd-icon-controller.svg');
      z-index: 3;
      -webkit-transition: all 300ms linear;
      -moz-transition: all 300ms linear;
      -o-transition: all 300ms linear;
      -ms-transition: all 300ms linear;
      transition: all 300ms linear;
    }
    #cd-zoom-in:hover,
    #cd-zoom-out:hover {
      opacity: 1;
    }
    .no-touch #cd-zoom-in:hover,
    .no-touch #cd-zoom-out:hover {
      opacity: 1;
    }
    #cd-zoom-in:hover,
    #cd-zoom-out:hover {
      opacity: 1;
    }
    #cd-zoom-in {
      background-position: 50% 0;
      margin-top: 20px;
      margin-bottom: 1px;
      z-index: 3;
    }
    #cd-zoom-out {
      background-position: 50% -32px;
      z-index: 3;
    }

    .footer p {
      text-align: left;
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      font-size: 17px;
      line-height: 24px;
      color: #dbdbdb;
      z-index: 3;
    }
    .footer a {
      color: #999;
      position: relative;
      z-index: 3;
      -webkit-transition: all 250ms linear;
      -moz-transition: all 250ms linear;
      -o-transition: all 250ms linear;
      -ms-transition: all 250ms linear;
      transition: all 250ms linear;
    }
    .footer a:hover {
      color: #fff;
    }
    .footer a:before {
      position: absolute;
      width: 100%;
      left: 0;
      bottom: -15px;
      height: 3px;
      content: '';
      opacity: 0;
      z-index: 1;
      -webkit-transition: all 250ms linear;
      -moz-transition: all 250ms linear;
      -o-transition: all 250ms linear;
      -ms-transition: all 250ms linear;
      transition: all 250ms linear;
    }
    .footer a:hover:before {
      bottom: -2px;
      opacity: 0.7;
    }
    .footer-social {
      position: relative;
      z-index: 20;
      float: right;
      display: block;
    }
    .footer-social li {
      display: inline-block;
      position: relative;
      margin-right: 12px;
    }
    .footer-social li a {
      position: relative;
      font-family: 'Lato', sans-serif;
      font-weight: 400;
      font-size: 15px;
      line-height: 26px;
      letter-spacing: 1px;
      color: #fff;
      padding-left: 9px;
      -webkit-transition: all 0.3s ease-out;
      -moz-transition: all 0.3s ease-out;
      -o-transition: all 0.3s ease-out;
      transition: all 0.3s ease-out;
    }
    .footer-social li a.github:hover {
      color: #333;
    }
    .footer-social li a.linkedin:hover {
      color: #0077b5;
    }
    .footer-social li a.twitter:hover {
      color: #1da1f2;
    }
    .footer-social li a:before {
      content: '';
      position: absolute;
      height: 4px;
      margin-top: -2px;
      border-radius: 50%;
      width: 4px;
      left: 0;
      top: 50%;
      z-index: 10;
    }
    .footer-social li a.github:before {
      background-color: #333;
    }
    .footer-social li a.linkedin:before {
      background-color: #0077b5;
    }
    .footer-social li a.twitter:before {
      background-color: #1da1f2;
    }

    .tipper {
      background-color: transparent;
      height: 1px;
      left: -99999px;
      position: absolute;
      pointer-events: none;
      top: -99999px;
      width: 1px;
      z-index: 100000;
    }
    .tipper .tipper-content {
      background-color: transparent;
      color: #000;
      font-weight: 700;
      letter-spacing: 0;
      border-radius: 3px;
      display: block;
      float: left;
      font-family: 'Montserrat', sans-serif;
      font-size: 18px;
      margin: 0;
      padding: 6px 20px;
      position: relative;
      white-space: nowrap;
    }
    .tipper .tipper-content strong {
      background-color: #fff;
      color: #313131;
      padding: 10px 20px;
      font-weight: 700;
    }
    .tipper .tipper-content em {
      position: absolute;
      top: 0;
      right: 0;
      background-color: #fff;
      padding: 3px 10px;
      z-index: 200;
      font-family: 'Lato', sans-serif;
      font-weight: 700;
      font-size: 14px;
    }
    .tipper .tipper-caret {
      display: block;
      height: 11px;
      position: absolute;
      width: 100%;
      font-weight: 700;
    }

    .tipper.right .tipper-caret {
      background-position: left center;
      left: -5px;
      top: 0;
    }

    .tipper.left .tipper-caret {
      background-position: right center;
      right: -5px;
      top: 0;
    }

    .tipper.top .tipper-caret,
    .tipper.bottom .tipper-caret {
      display: block;
      float: none;
      height: 5px;
      width: 12px;
      margin-left: -6px;
    }

    .tipper.top .tipper-caret {
      background-position: center bottom;
      bottom: -5px;
      left: 0;
      text-align: center;
    }

    .tipper.bottom .tipper-content {
      background: transparent;
    }
    .tipper.bottom .tipper-caret {
      background-position: center top;
      top: -5px;
      left: 0;
    }

    @media only screen and (max-width: 1600px) {
      .menu-back {
        padding-top: 40px;
      }
      .padding-top-from-nav {
        padding-top: 190px;
      }
      .tooltip__base {
        margin-right: -50px;
        width: 250px;
        height: 180px;
      }
      .tooltip__content {
        width: 200px;
        border-radius: 5px;
      }
    }
    @media only screen and (max-width: 1200px) {
      .padding-top-from-nav {
        padding-top: 40px;
      }
      .home-text-freelance h1 {
        font-size: 20px;
        line-height: 28px;
      }
      .home-text-freelance h1 span {
        font-size: 70px;
        line-height: 80px;
      }
      .portfolio-box-1 {
        width: 50%;
      }
      .portfolio-box-1.quarter-width {
        width: 50%;
      }
      .portfolio-box-1.have-space {
        margin: 25px;
        margin-left: 24px;
        width: calc(50% - 50px);
      }
      .portfolio-box-1.quarter-width.have-space {
        margin: 25px;
        margin-left: 24px;
        width: calc(50% - 50px);
      }
    }

    @media only screen and (max-width: 1199px) {
      .cbp-af-header.cbp-af-header-shrink .logo {
        width: 98px;
        height: 20px;
        top: 50px;
        background-size: 98px 20px;
        -webkit-transition: all 0.4s ease-out;
        -moz-transition: all 0.4s ease-out;
        -o-transition: all 0.4s ease-out;
        transition: all 0.4s ease-out;
      }
      .logo {
        width: 98px;
        height: 20px;
        top: 50px;
        background-size: 98px 20px;
        -webkit-transition: all 0.4s ease-out;
        -moz-transition: all 0.4s ease-out;
        -o-transition: all 0.4s ease-out;
        transition: all 0.4s ease-out;
      }

      .menu-back {
        background: #020202;
        -webkit-transition: all 0.4s ease-out;
        -moz-transition: all 0.4s ease-out;
        -o-transition: all 0.4s ease-out;
        transition: all 0.4s ease-out;
      }
      .cbp-af-header.cbp-af-header-shrink {
        background: #020202;
        -webkit-transition: all 0.4s ease-out;
        -moz-transition: all 0.4s ease-out;
        -o-transition: all 0.4s ease-out;
        transition: all 0.4s ease-out;
      }

      .menu > ul {
        padding-bottom: 10px;
      }
      #menu-wrap {
        position: relative;
        background: #020202;
      }
      .cbp-af-header.cbp-af-header-shrink .menu > ul > li a {
        padding: 16px 0;
        margin-left: 20px;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
      }
      .menu > ul > li a {
        margin-left: 20px;
        -webkit-transition: all 0.3s ease-out;
        -moz-transition: all 0.3s ease-out;
        -o-transition: all 0.3s ease-out;
        transition: all 0.3s ease-out;
      }
      .cbp-af-header.cbp-af-header-shrink .menu > ul > li > ul > li a {
        padding: 0;
        margin-left: 10px;
        margin-right: 10px;
        color: #c5c5c5;
        font-family: 'Open Sans';
        font-weight: 500;
        font-size: 10px;
        line-height: 18px;
        letter-spacing: 2px;
        text-transform: uppercase;
        width: 100%;
        display: block;
      }
      .menu > ul > li a {
        padding: 16px 0;
      }
      .menu > ul > li > ul > li a {
        padding: 0;
        margin-left: 10px;
        margin-right: 10px;
        color: #c5c5c5;
        font-family: 'Open Sans';
        font-weight: 500;
        font-size: 10px;
        line-height: 18px;
        letter-spacing: 2px;
        text-transform: uppercase;
        width: 100%;
        display: block;
      }
      .menu-mobile {
        display: block;
        margin-top: 15px;
      }
      .menu-dropdown-icon-sub:before,
      .menu-dropdown-icon:before {
        display: block;
        position: relative;
      }
      .menu > ul > li > ul {
        padding: 0;
        background-color: #000;
      }
      .menu > ul {
        overflow: hidden;
        width: 100%;
        float: none;
        position: relative;
        display: block;
        visibility: hidden;
        background: #020202;
        opacity: 0;
        height: 0;
        -webkit-transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        transition: all 0.2s ease-in-out;
      }
      .menu > ul > li {
        width: 100%;
        float: none;
        display: block;
      }
      .menu > ul > li a {
        width: 100%;
        display: block;
      }
      .menu > ul > li > ul {
        position: relative;
      }
      .menu > ul > li > ul.normal-sub {
        width: 100%;
        padding: 0;
      }
      .menu > ul > li > ul.normal-sub > li a span.go-right-icon,
      .menu > ul > li > ul.normal-sub > li a span.go-left-icon {
        display: none;
      }
      .menu > ul > li > ul.normal-sub > li ul.go-right,
      .menu > ul > li > ul.normal-sub > li ul.go-left {
        position: relative;
        left: auto;
        top: auto;
        width: 100%;
        padding: 0 10px;
        background: #000;
        display: block;
      }
      .menu > ul > li > ul.normal-sub > li ul.go-right li a,
      .menu > ul > li > ul.normal-sub > li ul.go-left li a {
        padding: 5px 0;
      }
      .cbp-af-header.cbp-af-header-shrink
        .menu
        > ul
        > li
        > ul.normal-sub
        > li
        ul.go-right
        li
        a,
      .cbp-af-header.cbp-af-header-shrink
        .menu
        > ul
        > li
        > ul.normal-sub
        > li
        ul.go-left
        li
        a {
        padding: 5px 0;
      }
      .cbp-af-header.cbp-af-header-shrink .menu > ul > li > ul.normal-sub {
        width: 100%;
        padding: 0;
      }
      .menu > ul > li > ul.normal-sub > li {
        padding-bottom: 0;
        display: block;
      }
      .cbp-af-header.cbp-af-header-shrink
        .menu
        > ul
        > li
        > ul.normal-sub
        > li
        a {
        border: 0;
        padding: 10px 0;
      }
      .menu > ul > li > ul.normal-sub > li a {
        border: 0;
        padding: 10px 0;
      }
      .menu > ul > li > ul.normal-sub p {
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 20px;
        margin-bottom: 7px;
        width: calc(100% - 20px);
      }
      .menu > ul > li > ul > li.two-col,
      .menu > ul > li > ul > li.three-col,
      .menu > ul > li > ul > li.two-thirds-col,
      .menu > ul > li > ul > li {
        float: none;
        width: 100%;
        padding-bottom: 15px;
      }
      .menu > ul > li > ul > li:first-child {
        margin: 0;
      }
      .menu > ul > li > ul > li > ul {
        position: relative;
      }
      .menu > ul > li > ul > li > ul > li {
        float: none;
      }
      .menu .show-on-mobile {
        display: block;
        visibility: visible;
        opacity: 1;
        height: auto;
      }
      .menu > ul > li.social-mobile,
      .cbp-af-header.cbp-af-header-shrink .menu > ul > li.social-mobile {
        display: inline-block;
        width: auto;
      }
      .menu > ul > li a.social,
      .cbp-af-header.cbp-af-header-shrink .menu > ul > li a.social {
        padding: 30px 8px;
        display: inline-block;
      }
      .menu > ul > li a.social.first-icon,
      .cbp-af-header.cbp-af-header-shrink .menu > ul > li a.social.first-icon {
        padding-left: 0;
      }
      .back-logo-image {
        background-size: 0 0;
      }

      .cbp-af-header.light.cbp-af-header-shrink {
        border-bottom: none;
      }
      .menu.light .menu-mobile:after {
        color: #000;
      }
      .menu.light .menu-dropdown-icon:before {
        background: #fff;
        color: #000;
      }
      .menu.light > ul > li > ul {
        background: transparent;
        box-shadow: none;
      }

      .menu.light > ul > li > ul > li p {
        color: #000;
        border-bottom: 1px solid rgba(120, 120, 120, 0.2);
      }
      .menu.light > ul > li > ul.normal-sub > li ul.go-left,
      .menu.light > ul > li > ul.normal-sub > li ul.go-right {
        background: transparent;
        box-shadow: none;
      }
      .menu.light .form-section {
        background-color: #fff;
      }

      #menu-wrap .parallax-1,
      #menu-wrap .parallax-home {
        display: none;
      }
      #menu-wrap .dark-over {
        display: none;
      }

      .menu-back.menu-have-back-color {
        background: rgba(0, 0, 0, 1);
      }
      .cbp-af-header.menu-have-back-color.cbp-af-header-shrink {
        background: rgba(0, 0, 0, 1);
      }
      .menu-back.light.menu-have-back-color {
        background: rgba(245, 245, 245, 1);
      }
      .cbp-af-header.light.menu-have-back-color.cbp-af-header-shrink {
        background: rgba(245, 245, 245, 1);
      }

      .menu.move-for-left .menu-mobile:after {
        float: left;
      }

      .menu.menu-center-logo-top {
        margin: 0;
      }
      .menu.menu-center-logo-top > ul {
        float: none;
        margin: 0;
        width: 100%;
        text-align: left;
      }
      .menu.menu-center-logo-top > ul > li {
        float: left;
        margin: 0;
        display: block;
      }
      .cbp-af-header.cbp-af-header-shrink .logo.menu-center-logo-top {
        top: 34px;
        left: 0;
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0);
      }
      .logo.menu-center-logo-top {
        top: 34px;
        left: 0;
        -webkit-transform: translateX(0);
        -moz-transform: translateX(0);
        -ms-transform: translateX(0);
        -o-transform: translateX(0);
        transform: translateX(0);
      }
      .menu-container.menu-center-logo-top {
        padding-top: 0;
      }
      .cbp-af-header.cbp-af-header-shrink .menu-container.menu-center-logo-top {
        padding-top: 0;
      }

      .home-text-wrap {
        margin-top: 0;
      }
    }

    @media only screen and (max-width: 1000px) {
      .menu-back {
        padding-top: 0;
      }
      .home-text-freelance h1 {
        font-size: 16px;
        line-height: 22px;
      }
      .home-text-freelance h1 span {
        font-size: 50px;
        line-height: 60px;
      }
      .padding-top-bottom {
        padding-top: 60px;
        padding-bottom: 60px;
      }
      .padding-top {
        padding-top: 60px;
      }
      .padding-bottom {
        padding-bottom: 60px;
      }
      .date-time-blog-page {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 0;
      }
    }

    @media only screen and (max-width: 800px) {
      .tooltip__base {
        display: none;
      }
      .tooltip__content {
        display: none;
      }
      #filter li a {
        font-size: 16px;
        line-height: 20px;
      }
      .portfolio-box-1 {
        width: 100%;
      }
      .portfolio-box-1.half-width {
        width: 100%;
      }
      .portfolio-box-1.quarter-width {
        width: 100%;
      }
      .portfolio-box-1.have-space {
        margin: 25px;
        margin-left: 24px;
        width: calc(100% - 50px);
      }
      .portfolio-box-1.half-width.have-space {
        margin: 25px;
        margin-left: 24px;
        width: calc(100% - 50px);
      }
      .portfolio-box-1.quarter-width.have-space {
        margin: 25px;
        margin-left: 24px;
        width: calc(100% - 50px);
      }
      .comment {
        padding-top: 40px;
        padding-bottom: 0;
      }
      .comment.subcomment {
        width: calc(100% - 30px);
        margin-left: 30px;
      }
      .comment img {
        display: none;
      }
      .comment .time {
        padding-left: 0;
        padding-top: 0;
      }
      .comment h6,
      .comment p {
        padding-left: 0;
      }
      .comment a {
        float: none;
        text-align: left;
        margin-top: 20px;
      }

      .project-nav-wrap {
        background-image: none;
      }
      .project-nav-wrap .left-nav {
        margin-right: 0;
        width: 50%;
        float: left;
        height: 40px;
        text-align: left;
        font-size: 30px;
        line-height: 40px;
        vertical-align: middle;
      }
      .project-nav-wrap .right-nav {
        margin-left: 0;
        width: 50%;
        float: right;
        height: 40px;
        font-size: 30px;
        line-height: 40px;
        vertical-align: middle;
        text-align: right;
      }
      .project-nav-wrap .left-nav .text-on-hover,
      .project-nav-wrap .right-nav .text-on-hover {
        display: none;
      }
    }

    @media only screen and (max-width: 600px) {
      .home-text-freelance h1 {
        font-size: 14px;
        line-height: 20px;
      }
      .home-text-freelance h1 span {
        font-size: 30px;
        line-height: 40px;
      }
    }

    @media only screen and (min-width: 1200px) and (max-width: 1319px) {
      .cbp-af-header.cbp-af-header-shrink .cd-nav-trigger {
        right: 5px;
      }
      .cd-nav-trigger {
        right: 5px;
      }
    }

    @media only screen and (min-width: 960px) and (max-width: 1199px) {
      .cbp-af-header.cbp-af-header-shrink .cd-nav-trigger {
        right: 5px;
      }
      .cd-nav-trigger {
        right: 5px;
      }
      .content-team {
        height: 370px;
        --pieces-height: 370px;
      }
    }

    @media only screen and (min-width: 768px) and (max-width: 959px) {
      .cbp-af-header.cbp-af-header-shrink .cd-nav-trigger {
        right: 5px;
      }
      .cd-nav-trigger {
        right: 5px;
      }
      .content-team {
        height: 300px;
        --pieces-height: 300px;
      }
    }

    @media only screen and (min-width: 480px) and (max-width: 767px) {
      .cbp-af-header.cbp-af-header-shrink .cd-nav-trigger {
        right: 5px;
      }
      .cd-nav-trigger {
        right: 5px;
      }
      .footer p {
        text-align: center;
      }
      .footer-social {
        float: none;
        text-align: center;
      }
      .footer-social li {
        margin-right: 6px;
        margin-left: 6px;
        text-align: center;
      }
      .slideshow-team {
        width: 100%;
        display: block;
        float: right;
      }
      .menu-team {
        margin-top: 40px;
        width: 100%;
        display: block;
        float: right;
      }
    }

    @media only screen and (max-width: 479px) {
      .cbp-af-header.cbp-af-header-shrink .cd-nav-trigger {
        right: 5px;
      }
      .cd-nav-trigger {
        right: 5px;
      }
      .footer p {
        text-align: center;
      }
      .footer-social {
        float: none;
        text-align: center;
      }
      .footer-social li {
        margin-right: 6px;
        margin-left: 6px;
        text-align: center;
      }
      .content-team {
        height: 300px;
        --pieces-height: 300px;
      }
      .slideshow-team {
        width: 100%;
        display: block;
        float: right;
      }
      .menu-team {
        margin-top: 40px;
        width: 100%;
        display: block;
        float: right;
      }
    }
  `}</style>
)