"use strict";function offcanvas(){var a=$("#main-navigation"),s=$("#shift-body"),f=$("#nav-switch");f.click(function(){a.toggleClass("offCanvas"),s.toggleClass("offCanvas"),f.hasClass("fa-bars")?$(this).removeClass("fa-bars").addClass("fa-times"):$(this).removeClass("fa-times").addClass("fa-bars")})}$(document).ready(function(){offcanvas()});