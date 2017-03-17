import $ from 'jquery';

class NavMenu {
	constructor() {
		this.menuIcon = $(".nav-bar__menu-icon");
		this.menuList = $(".nav-bar__list");
		this.events();
	}
	
	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}

	toggleTheMenu() {
		this.menuList.toggleClass("nav-bar__list--is-visible");
	}
}

export default NavMenu;