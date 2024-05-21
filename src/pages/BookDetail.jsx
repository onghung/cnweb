import { useParams } from 'react-router-dom'
import Footer from "../components/Footer";
import Header from "../components/Header";
import { books } from '../../data.json'
import "./BookDetail.css"

function BookDetail() {
    // react hook
    const { id } = useParams()
    const book = books.find(item => item.id == id)
    return <>
    <div>
    <Header />
    <div class="ContainerRevamp-sc-1hvvgwz-0 dOGdaN">
                <div class="sc-iCoGMd kMthTr">
                    <div class="sc-gKAaRy dbGOOa">
                        <div class="sc-iCoGMd kMthTr">
                            <div class="styles__Wrapper-sc-1aj05m-0 geQtTN">
                                <div class="WidgetTitle__WidgetContainerStyled-sc-1ikmn8z-0 iHMNqO deta">
                                    <div class="style__ProductImagesStyle-sc-1eco9m8-0 rrCuf">
                                        <div class="image-frame">
                                            <div class="pictr" data-view-id="pdp_main_view_gallery">
                                                <div class="ima" >
                                                <picture class="webpimg-container">
                                                <img src={book.images[0].base_url} alt="" />
                                                </picture>
                                                </div>
                                            </div>
                                            <div class="image-badges"></div>
                                        </div>
                                        <div class="style__ThumbnailListStyled-sc-18wegpu-0 gGsiZr thumbnail-list">
                                            <div class="style__StyledSimpleSlider-sc-7g2lnm-0 bCOUwr children-slider">
                                                <span class="icon icon-prev disabled">
                                                    <img src={book.images[0].base_url} alt="" />
                                                </span>
                                                <div class="content">
                                                    <span class="slider" >
                                                        <a data-view-id="pdp_main_view_photo" class="style__ThumbnailItemStyled-sc-18wegpu-1 eYAAt active">
                                                        <picture class="webpimg-container">
                                                                <source type="image/webp" srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/82/82/80/c542073200c6e95d3e89840b2f41ce2e.jpg.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/product/82/82/80/c542073200c6e95d3e89840b2f41ce2e.jpg.webp 2x"/>
                                                                <img width="47" height="47" style={{width:"47px"}} alt="product-img-0" src="https://salt.tikicdn.com/cache/200x280/ts/product/82/82/80/c542073200c6e95d3e89840b2f41ce2e.jpg" srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/82/82/80/c542073200c6e95d3e89840b2f41ce2e.jpg 1x, https://salt.tikicdn.com/cache/100x100/ts/product/82/82/80/c542073200c6e95d3e89840b2f41ce2e.jpg 2x" class="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo"/>
                                                        </picture>
                                                        </a>
                                                        <a data-view-id="pdp_main_view_photo" class="style__ThumbnailItemStyled-sc-18wegpu-1 eYAAt">
                                                        <picture class="webpimg-container">
                                                            <source type="image/webp" srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/17/7c/ee/170e84629d730657e2e43c0ebaae4fb6.jpg.webp 1x, https://salt.tikicdn.com/cache/100x100/ts/product/17/7c/ee/170e84629d730657e2e43c0ebaae4fb6.jpg.webp 2x"/>
                                                            <img width="47" height="47" style={{width:"47px"}} alt="product-img-1" src="https://salt.tikicdn.com/cache/200x280/ts/product/17/7c/ee/170e84629d730657e2e43c0ebaae4fb6.jpg" srcSet="https://salt.tikicdn.com/cache/100x100/ts/product/17/7c/ee/170e84629d730657e2e43c0ebaae4fb6.jpg 1x, https://salt.tikicdn.com/cache/100x100/ts/product/17/7c/ee/170e84629d730657e2e43c0ebaae4fb6.jpg 2x" class="WebpImg__StyledImg-sc-h3ozu8-0 fWjUGo"/>
                                                        </picture>
                                                        </a>
                                                    </span>
                                                </div>
                                                <span class="icon icon-next disabled">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18" fill="none">
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.91107 3.41107C6.23651 3.08563 6.76414 3.08563 7.08958 3.41107L12.0896 8.41107C12.415 8.73651 12.415 9.26415 12.0896 9.58958L7.08958 14.5896C6.76414 14.915 6.23651 14.915 5.91107 14.5896C5.58563 14.2641 5.58563 13.7365 5.91107 13.4111L10.3218 9.00033L5.91107 4.58958C5.58563 4.26414 5.58563 3.73651 5.91107 3.41107Z" fill="#0A68FF"></path>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="styles__StyledProductContent-sc-11yowqh-0 cWoPXp">
                                    <div class="styles__BodyContainerStyled-sc-w4gwmz-0 coqMVo">
                                        <div  class="WidgetTitle__WidgetContainerStyled-sc-1ikmn8z-0 iHMNqO tes">
                                            <div class="styles__BodyInfoStyled-sc-1wuilku-3 kGLFWS">
                                                <div class="fi" >
                                                    <div class="Header__HeaderStyled-sc-tszvob-0 kiEail">
                                                        <div class="BrandAuthor__BrandStyled-sc-95xwa5-0 kxHklt">
                                                            <picture class="webpimg-container">
                                                                        <source type="image/webp" srcSet="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png"/>
                                                                        <img srcSet="https://salt.tikicdn.com/ts/upload/d7/56/04/b93b8c666e13f49971483596ef14800f.png" width="89" height="20" alt="is_authentic" style={{width:"89px",height:"20px",opacity:"1"}} class="styles__StyledImg-sc-p9s3t3-0 hbqSye"/>
                                                            </picture>
                                                            <span class="brand-and-author no-after">
                                                                <h6>
                                                                    Tác giả: <a data-view-id="pdp_details_view_author" data-view-index="0" href="/author/truong-tieu-hang.html">Trương Tiếu Hằng</a>
                                                                </h6>
                                                            </span>
                                                        </div>
                                                        <h1 class="Title__TitledStyled-sc-1kxsq5b-0 cvyKhs">{book.name}</h1>
                                                      
                                                            <div class="start">
                                                                <div class="styles__StyledReview-sc-1swui9f-1 dXPbue">
                                                                    <div class="starr">5.0</div>
                                                                    <div class="sao">
                                                                        <span class="star fa fa-star checked"></span>
                                                                        <span class="star fa fa-star checked"></span>
                                                                        <span class="star fa fa-star checked"></span>
                                                                        <span class="star fa fa-star checked"></span>
                                                                        <span class="star fa fa-star checked"></span>
                                                                    </div>
                                                                    <a class="number" data-view-id="pdp_main_view_review">(225)</a>
                                                                    <div class="styles__BelowTitleSeparator-sc-1swui9f-2 fctQDC"></div>
                                                                </div>
                                                                <div data-view-id="pdp_quantity_sold" class="styles__StyledQuantitySold-sc-1swui9f-3 bExXAB">{book?.quantity_sold?.text || "Đã bán 1000+"}</div>
                                                            </div>
                                                    </div>
                                                    <div class="price" >
                                                        <div class="style__StyledProductPrice-sc-zusmvx-0 jFWyKZ">
                                                            <div class="product-price">
                                                                <div class="product-price__current-price">
                                                                    {book.list_price}<sup>₫</sup>
                                                                </div>
                                                                <div class="product-price__discount-rate">{Math.round(((book.original_price - book.current_seller.price)/book.original_price)*100)}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div  class="WidgetTitle__WidgetContainerStyled-sc-1ikmn8z-0 iHMNqO tes">
                                            <div class="WidgetTitle__WidgetTitleStyled-sc-1ikmn8z-1 eaKcuo">
                                                Mô tả sản phẩm
                                            </div>
                                            <div class="style__Wrapper-sc-13sel60-0 dGqjau content">
                                                <div class="ToggleContent__Wrapper-sc-fbuwol-1 xbBes">
                                                    <div class="ToggleContent__View-sc-fbuwol-0 imwRtb" style={{overflow: "hidden", height: "250px"}}>
                                                       {book.description}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="RightBody__RightStyled-sc-126dmb3-0 fhifnC">
                            <div class="tt">
                                <div  class="WidgetTitle__WidgetContainerStyled-sc-1ikmn8z-0 iHMNqO ss">
                                    <div   class="SellerHeader__SellerHeaderStyled-sc-1nuhgtg-0 kVRTMZ pad">
                                        <div class="seller" >
                                            <span class="seller-name"></span>
                                        </div>
                                    </div>
                                    <div class="BuyBoxHeader__RightHeaderStyled-sc-1k02ehw-0 CYIiu vison">
                                    <img src={book.images[0].base_url} alt="" />
                                        <div>Phiên bản Logo Tiki</div>
                                    </div>
                                    <div class="styles__StyledAddToCart-sc-h648rm-0 hVrOaA bor">
                                        <div class="quan">
                                            <div class="QuantityInput__Wrapper-sc-8dx8cs-0 hEzlHi">
                                                <p class="label">Số Lượng</p>
                                                <div class="group-input">
                                                    <button class="disable">
                                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg" alt="remove-icon" width="20" height="20"/>
                                                    </button>
                                                    <input type="text" value="1" class="input"/>
                                                    <button>
                                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg" alt="add-icon" width="20" height="20"/>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="styles__PriceContainerStyled-sc-1vgh3o2-2 exLljd">
                                            <div class="styles__PriceLabelStyled-sc-1vgh3o2-0 DxBpi">Tạm tính</div>
                                            <div class="styles__PriceStyled-sc-1vgh3o2-1 egMRnV gia">
                                                <div>
                                                {book.list_price}<sup>₫</sup>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="group-button">
                                            <button class="styles__PrimaryButtonStyled-sc-72jxmg-0 Ketmo">
                                                <span>Mua ngay</span>
                                            </button>
                                            <button type="button" data-view-id="pdp_add_to_cart_button" class="styles__SecondaryButtonStyled-sc-72jxmg-1 dTjEHf">Thêm vào giỏ</button>
                                            <button type="button" class="styles__SecondaryButtonStyled-sc-72jxmg-1 dTjEHf">
                                                <div>Mua trước trả sau</div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
    </div>

    </>
}
export default BookDetail;