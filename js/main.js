document.addEventListener("DOMContentLoaded", function () {
    // Tập hợp tất cả các phần tử cần sử dụng
    const backTop = document.querySelector("#back-top");

    // xử lý sự kiện chuyển tab
    function handleChangeTab () {
        const changTabs = document.querySelectorAll('.js__changeTab')

        if (changTabs.length === 0) return;

        changTabs.forEach((changTab)=>{
            const tabs = changTab.querySelectorAll(".js__tabItem");
            const panes = changTab.querySelectorAll(".js__tabPane");

            tabs.forEach((tab,index)=>{
                tab.onclick = function() {
                    pane = panes[index]

                    changTab.querySelector('.js__tabItem.active').classList.remove('active')
                    changTab.querySelector('.js__tabPane.active').classList.remove('active')

                    this.classList.add('active')
                    pane.classList.add('active')
                }
            })
        })
    }

    // Xử lý video tỉ lệ 16:9
    function handleVideo_16x9() {
        const video169s = document.querySelectorAll(".js__video169");
        if (video169s.length === 0) return;
        video169s.forEach((video169) => {
            var videos = video169.querySelectorAll("iframe");
            if (videos.length === 0) return;
            videos.forEach((video) => {
                var w = video.offsetWidth;
                video.style.height = (w * 9) / 16 + "px";
            });
        });
    }

    // Xử lý sự kiện scroll navbar mb
    function handleNavbarMb() {
        const navbarMb = document.querySelector(".js__navbarMenuMb");
        if (!navbarMb) return;

        const container = navbarMb.querySelector(".js__navbarMb");
        const scrollBtn = navbarMb.querySelector(".js__navbarIcon");

        let scrollAmount = 0;
        let scrollPosition = 0;

        scrollBtn.addEventListener("click", function () {
            const scrollDistance = 100;
            scrollAmount = scrollPosition + scrollDistance;
            scrollAmount = Math.min(
                scrollAmount,
                container.scrollWidth - container.clientWidth
            );
            container.scrollTo({
                left: scrollAmount,
                behavior: "smooth",
            });
            scrollPosition = scrollAmount;
        });
    }

    // khởi tạo slider với nhiều item có width auto
    function initSliderAutoItems() {
        const autoSlides = document.querySelectorAll(".js__autoSlideContainer");
        if (autoSlides) {
            autoSlides.forEach((item) => {
                var slider = item.querySelector(".js__swiperAuto");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                new Swiper(slider, {
                    slidesPerView: "auto",
                    spaceBetween: 8,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                });
            });
        }
    }
    // Khởi tạo slider với một item
    function initSliderOneItems() {
        const oneSlides = document.querySelectorAll(".js__oneSlidesContainer");
        if (oneSlides) {
            oneSlides.forEach((item) => {
                var slider = item.querySelector(".js__oneSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");

                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                });
            });
        }
    }

    // khởi tạo slider với 2 item
    function initSliderTwoItems() {
        const twoSlides = document.querySelectorAll(".js__twoSlidesContainer");
        if (twoSlides) {
            twoSlides.forEach((item) => {
                var slider = item.querySelector(".js__twoSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 2,
                    spaceBetween: 15,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        }
                    },
                });
            });
        }
    }

    // khởi tạo slider với 2 item
    function initSliderTwoSecondaryItems() {
        const twoSlides = document.querySelectorAll(".js__twoSecondarySlidesContainer");
        if (twoSlides) {
            twoSlides.forEach((item) => {
                var slider = item.querySelector(".js__twoSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 15,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 1,
                        },
                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        }
                    },
                });
            });
        }
    }
    // khởi tạo slider với 3 item
    function initSliderThreeItems() {
        const threeSlides = document.querySelectorAll(".js__threeSlidesContainer");
        if (threeSlides) {
            threeSlides.forEach((item) => {
                var slider = item.querySelector(".js__threeSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 2,
                    spaceBetween: 15,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 15,
                        }
                    },
                });
            });
        }
    }

    // khởi tạo slider với 4 item
    function initSliderFourItems() {
        const fourSlides = document.querySelectorAll(".js__fourSlidesContainer");
        if (fourSlides) {
            fourSlides.forEach((item) => {
                var slider = item.querySelector(".js__fourSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 2,
                    spaceBetween: 15,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        }
                    },
                });
            });
        }
    }

    // khởi tạo slider với 5 item
    function initSliderFiveItems() {
        const fiveSlides = document.querySelectorAll(".js__fiveSlidesContainer");
        if (fiveSlides) {
            fiveSlides.forEach((item) => {
                var slider = item.querySelector(".js__fiveSlide");
                var next = item.querySelector(".swiper-button-next");
                var prev = item.querySelector(".swiper-button-prev");
                var pagi = item.querySelector(".swiper-pagination");
                new Swiper(slider, {
                    slidesPerView: 1,
                    spaceBetween: 10,
                    slidesPerGroup: 1,
                    navigation: {
                        nextEl: next || null,
                        prevEl: prev || null,
                    },
                    pagination: {
                        el: pagi || null,
                        clickable: true,
                    },
                    // autoplay: {
                    //     delay: 3000,
                    //     disableOnInteraction: false,
                    // },
                    breakpoints: {
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        }
                    },
                });
            });
        }
    }


    // xử lý sự kiện show more menu
    function handleMoreMenu() {
        const navbarMoreIcon = document.querySelector('.js__navbarMoreIcon')
        const navbarMoreContent = document.querySelector('.js__navbarMoreContent')
        if(!navbarMoreIcon || !navbarMoreContent) return;

        navbarMoreIcon.onclick = function() {
            this.classList.toggle('active')
            navbarMoreContent.classList.toggle('active')
        }

    }


     // xử lý sự kiện để show sub menu
     function handleShowSubMenu() {
        
        const subMenu = document.querySelector(".js__clickShowMenuMb");
        if (!subMenu) return;
        var closeSubMenu = document.querySelector(".js__closeSubMenu");
        var overlay = document.querySelector(".js__overlay");
        var parentBox = subMenu.parentElement;

        subMenu.onclick = function () {
            this.parentElement.classList.add("active");
            document.querySelector("body").style.overflow = "hidden";
        };
        closeSubMenu.onclick = function () {
            parentBox.classList.remove("active");
            document.querySelector("body").style.overflow = "auto";
        };
        overlay.onclick = function () {
            parentBox.classList.remove("active");
            document.querySelector("body").style.overflow = "auto";
        };
    }

    // Xử lý sự kiện để show dropdown submenu
    function handleShowDropdownSubMenu() {
        const dropdownSubMenu = document.querySelectorAll(".js__dropDown");
            if (dropdownSubMenu.length === 0) return;
            dropdownSubMenu.forEach((item) => {
                var parent = item.parentElement;
                var nextEle = parent.parentElement.querySelector(".js__listSubMenu");
                item.onclick = function () {
                    parent.classList.toggle("active");
                    if (nextEle.style.maxHeight) {
                        nextEle.style.maxHeight = null;
                    } else {
                        nextEle.style.maxHeight = nextEle.scrollHeight + "px";
                    }
                };
            });
    }

    // Xử lý sự kiện show search mb
    function handleShowSearchMb() {
        const searchMbs = document.querySelectorAll(".js__searchMb");
        if (searchMbs.length === 0) return;
        searchMbs.forEach((searchMb) => {
            var closeSearchMb =
                document.querySelector(".js__closeSearchMb");
            var formSearchMb = document.querySelector(".js__formSearchMb");
            const focusElement =
                formSearchMb.querySelector(".js__focusSearchMb");
            searchMb.onclick = function () {
                formSearchMb.classList.add("active");
                focusElement.focus();
                
            };
            closeSearchMb.onclick = function () {
                formSearchMb.classList.remove("active");
                focusElement.value = "";
            };
        });
    }

    // xử lý sự kiện để show popupLogin
    function handleShowPopupLogin() {
        const showPopupLogins = document.querySelectorAll(".js__showPopupLogin");
        const popupLoginContainer = document.querySelector(".js__popupLoginContainer");

        if(popupLoginContainer && showPopupLogins) {

            const popupLogin = popupLoginContainer.querySelector(".js__popupLogin");
            const closePopupLogin = popupLoginContainer.querySelector(".js__closePopupLogin");
            const overlay = popupLoginContainer.querySelector(".js__overlay");
            
            if (showPopupLogins.length === 0) return;

                
            showPopupLogins.forEach((showPopupLogin)=>{

                showPopupLogin.onclick = function() {
                    popupLogin.classList.add('active')
                    overlay.classList.add('active')
                    document.querySelector("body").style.overflow = "hidden";
                }
    
                closePopupLogin.onclick = function () {
                    document.querySelector("body").style.overflow = "auto";
                    popupLogin.classList.remove('active')
                    overlay.classList.remove('active')
                    loginForm.classList.add('active')
                    registerForm.classList.remove('active')
                    forgotForm.classList.remove('active')
                };
    
                overlay.onclick = function () {
                    this.classList.remove("active");
                    document.querySelector("body").style.overflow = "auto";
                    popupLogin.classList.remove('active');
                    loginForm.classList.add('active')
                    registerForm.classList.remove('active')
                    forgotForm.classList.remove('active')
                };

                // change form login register forgot
                const loginContainerForm = document.querySelector(".js__loginContainerForm");

                if(!loginContainerForm) return

                const loginForm = loginContainerForm.querySelector('.js__loginForm')
                const registerForm = loginContainerForm.querySelector('.js__registerForm')
                const forgotForm = loginContainerForm.querySelector('.js__forgotForm')

                const loginBtn = registerForm.querySelector('.js__loginBtn')
                const registerBtn = loginForm.querySelector('.js__registerBtn')
                const forgotBtn = loginForm.querySelector('.js__forgotBtn')
                
                // login
                registerBtn.onclick = function() {
                    loginForm.classList.remove('active')
                    registerForm.classList.add('active')
                    forgotForm.classList.remove('active')
                }
                // register
                loginBtn.onclick = function() {
                    registerForm.classList.remove('active')
                    loginForm.classList.add('active')
                }
                // forgot
                forgotBtn.onclick = function() {
                    loginForm.classList.remove('active')
                    forgotForm.classList.add('active')
                }
            })

            
        }
        
        
    }
    
    // xử lý sự kiện collapse
    function handleCollapse () {

        const collapseContainers = document.querySelectorAll('.js__collapseContainer')
        if (collapseContainers.length === 0) return;
        
        let activeItem = null;
        
        collapseContainers.forEach((collapseContainer)=>{
            const collapses = collapseContainer.querySelector('.js__collapse')
            collapses.onclick = function() {
                // khi item đang mở
                if (activeItem === collapseContainer) {
                    collapseContainer.classList.remove('active'); 
                    activeItem = null; 
                } else {
                    // khi không có item nào mở
                    if (activeItem) {
                        activeItem.classList.remove('active');
                    }
                    collapseContainer.classList.add('active');
                    activeItem = collapseContainer; 
                    
                }  
                 
            }
           
        })
    }

     // xử lý sự kiện để show dropdown
     function handleShowDropdown() {
        
        const dropdownContainers = document.querySelectorAll(".js__dropdownContainer");


        if (dropdownContainers.length === 0) return;


        dropdownContainers.forEach((dropdownContainer)=>{

            const dropdown = dropdownContainer.querySelector(".js__showDropdown");
            const dropdownContent = dropdownContainer.querySelector(".js__dropdownContent");
            const overlay = dropdownContainer.querySelector(".js__overlay");


            dropdown.onclick = function () {
                dropdownContent.classList.toggle("active");
                overlay.classList.add('active')

            };

            overlay.onclick = function () {
                dropdownContent.classList.remove("active");
                this.classList.remove("active");
            };
        })

      
    }


     // Xử lý tăng giảm font size
    function handleChangeFontSize() {
        var sizeDefaults = document.querySelectorAll('.size-default');
        var sizePlus = document.querySelectorAll('.size-plus');
        if(sizePlus.length > 0 && sizeDefaults.length > 0){
        size = parseInt(window.getComputedStyle(document.querySelector(".js_change_size")).fontSize, 10);
        size2 = parseInt(window.getComputedStyle(document.querySelector(".js_change_size2")).fontSize, 10);
        size3 = parseInt(window.getComputedStyle(document.querySelector(".js_change_size3")).fontSize, 10);

        sizePlus.forEach((item)=>{
            item.onclick = function(){
            document.querySelector(".js_change_size").style.fontSize = (size + 2) + "px";
            document.querySelector(".js_change_size2").style.fontSize = (size2 + 2) + "px";
            document.querySelector(".js_change_size3").style.fontSize = (size3 + 2) + "px";
            document.querySelector(".js_change_size3").classList.add('plusSize');
            }
        })

        sizeDefaults.forEach((item)=>{
            item.onclick = function(){
            document.querySelector(".js_change_size").style.fontSize = size + "px";
            document.querySelector(".js_change_size2").style.fontSize = size2 + "px";
            document.querySelector(".js_change_size3").style.fontSize = size3 + "px";
            document.querySelector(".js_change_size3").classList.remove('plusSize');
            }
        })
        }

    }

    // Xử lý thanh header dính
    function handleStickyHeader() {
        const stickyHeaderPC = document.querySelector(".js__stickyHeader");
        if (stickyHeaderPC) {
            const isSticky = scrollY > 300;
            stickyHeaderPC.classList.toggle("sticky", isSticky);
        }
    }

    // Xử lý sự kiện khi nhấn nút "back to top"
    function handleBackTop() {
    
        if (!backTop) return;

        backTop.onclick = function () {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        };

    }

    // Xử lý hiển thị nút backTop dựa trên vị trí cuộn trang
    function handleBackTopVisibility() {
        if (backTop) {
            if (
                document.body.scrollTop > 300 ||
                document.documentElement.scrollTop > 300
            ) {
                backTop.style.opacity = 1;
                backTop.style.visibility = "visible";
            } else {
                backTop.style.opacity = 0;
                backTop.style.visibility = "hidden";
            }
        }
    }

    // Xử lý sự kiện khi cuộn trang
    function handleWindowScroll() {
        handleStickyHeader();
        handleBackTopVisibility()
    }

    // Khởi tạo tất cả các chức năng
    function initApp() {
        handleMoreMenu();
        handleShowSubMenu();
        handleShowDropdownSubMenu();
        handleShowSearchMb();
        handleNavbarMb();
        handleShowPopupLogin();
        handleShowDropdown();
        handleCollapse();
        // slide
        initSliderAutoItems();
        initSliderOneItems();
        initSliderTwoItems();
        initSliderTwoSecondaryItems();
        initSliderFiveItems();
        // end slide
        handleBackTop();
        handleChangeTab();
        window.addEventListener('scroll',handleWindowScroll);
        window.addEventListener('resize',handleWindowScroll);
    }

    // Bắt đầu khởi tạo ứng dụng
    initApp();
});