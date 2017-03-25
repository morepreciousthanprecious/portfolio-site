import $ from 'jquery';

class NavMenuSub {
	constructor() {
		this.menuIcon = $(".nav-bar-sub__menu-icon");
		this.menuList = $(".nav-bar-sub__list");
		this.events();
	}
	
	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	}
	
	toggleTheMenu() {
		this.menuList.toggleClass("nav-bar-sub__list--is-visible");
		this.menuIcon.toggleClass("nav-bar-sub__menu-icon--animate");
	}
}

export default NavMenuSub;