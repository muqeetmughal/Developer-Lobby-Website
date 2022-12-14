import Footer from "../../layout/footer";
import Header from "../../layout/header-3";
import Link from 'next/link';
import Cta from "../../element/cta";
import client from "../../services";
import { gql } from "@apollo/client";
import dayjs from "dayjs";
import CommentSection from "../../components/CommentSection";

function BlogDetails1({ post }) {
	return (
		<>
			<Header />
			<div className="page-content bg-white">
				{/* <!-- Banner  --> */}
				<div className="dlab-bnr-inr overlay-primary-dark" style={{ "backgroundImage": "url(" + post.coverImage.url + ")" }}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1>{post.title}</h1>
							{/* <!-- Breadcrumb Row --> */}
							<nav aria-label="breadcrumb" className="breadcrumb-row">
								<ul className="breadcrumb">
									<li className="breadcrumb-item"><Link href="/"><a>Home</a></Link></li>
									<li className="breadcrumb-item active" aria-current="page">Blog</li>
								</ul>
							</nav>
							{/* <!-- Breadcrumb Row End --> */}
						</div>
					</div>
				</div>
				{/* <!-- Banner End --> */}

				{/* <!-- Blog Large --> */}
				<section className="content-inner bg-img-fix" style={{ "backgroundImage": "url(images/background/bg1.png)", "backgroundSize": "contain" }}>
					<div className="container">
						<div className="row">
							<div className="col-xl-8 col-lg-8 m-b50">
								{/* <!-- blog start --> */}
								<div className="dlab-blog blog-single style-1">
									<div className="dlab-media rounded-md shadow">
										<img src={post.coverImage.url} alt="" />
									</div>
									<div className="dlab-meta m-t10">
										<ul>
											<li className="post-date"><i className="flaticon-clock m-r10"></i>{dayjs(post.createdAt).toDate().toDateString()}</li>
											<li className="post-author"><i className="flaticon-user m-r10"></i>By <a href="javascript:void(0);">{post.author.name}</a></li>
										</ul>
									</div>
									<h4 className="dlab-title">{post.title}</h4>
									<div className="dlab-post-text" dangerouslySetInnerHTML={{ __html: post.content.html }} />
									<div className="dlab-meta border-top">
										<ul>
											<li className="post-tags">

												Tags:
												{post.tags.map((tag, index) => {
													return <a key={index} href="javascript:void(0);">#{tag} </a>
												})}

											</li>
											<li className="post-comment"><a href="javascript:void(0);"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
											<li className="post-share"><i className="flaticon-share"></i>
												<ul>
													<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
													<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
													<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
												</ul>
											</li>
										</ul>
									</div>
								</div>
								<div className="row extra-blog style-1">
									<div className="col-lg-12">
										<h2 className="blog-title">Related Blogs</h2>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="dlab-blog style-1 bg-white text-center m-b30">
											<div className="dlab-media">
												<img src="images/blog/default/thum3.jpg" alt="" />
											</div>
											<div className="dlab-info">
												<h5 className="dlab-title">
													<a href="/blog-large-right-sidebar">Praesent ut lobortis purus hasellus libero orci, accumsan.</a>
												</h5>
												<p className="m-b0">Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum  pulvinar.</p>
												<div className="dlab-meta meta-bottom">
													<ul>
														<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
														<li className="post-comment"><a href="javascript:void(0);"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
														<li className="post-share"><i className="flaticon-share"></i>
															<ul>
																<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
																<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
																<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
															</ul>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
									<div className="col-lg-6 col-md-6">
										<div className="dlab-blog style-1 bg-white text-center m-b30">
											<div className="dlab-media">
												<img src="images/blog/default/thum2.jpg" alt="" />
											</div>
											<div className="dlab-info">
												<h5 className="dlab-title">
													<a href="/blog-large-right-sidebar">Donec feugiat mollis nisi in dignissim. Morbi sollicitudin.</a>
												</h5>
												<p className="m-b0">Pellentesque vel nibh gravida erat interdum lacinia vel in lectus. Sed fermentum  pulvinar.</p>
												<div className="dlab-meta meta-bottom">
													<ul>
														<li className="post-date"><i className="flaticon-clock m-r10"></i>7 March, 2020</li>
														<li className="post-comment"><a href="javascript:void(0);"><i className="flaticon-speech-bubble"></i><span>15</span></a></li>
														<li className="post-share"><i className="flaticon-share"></i>
															<ul>
																<li><a className="fa fa-facebook" href="https://en-gb.facebook.com/"></a></li>
																<li><a className="fa fa-twitter" href="https://twitter.com/login?lang=en"></a></li>
																<li><a className="fa fa-linkedin" href="https://www.linkedin.com/login"></a></li>
															</ul>
														</li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>


								{/* <CommentSection /> */}


							</div>
							<div className="col-xl-4 col-lg-4 m-b30">
								<aside className="side-bar sticky-top">
									<div className="widget">
										<div className="search-bx">
											<form role="search" method="post">
												<div className="input-group">
													<div className="input-group-prepend">
														<span className="input-group-text"><i className="la la-search"></i></span>
													</div>
													<input name="text" className="form-control" placeholder="Search" type="text" />
													<span className="input-group-btn">
														<button type="submit" className="btn btn-primary"><i className="la la-long-arrow-right"></i></button>
													</span>
												</div>
											</form>
										</div>
									</div>
									<div className="widget widget_archive">
										<h2 className="widget-title">Category</h2>
										<ul>
											<li><a href="javascript:void(0);">Design<span>05</span></a></li>
											<li><a href="javascript:void(0);">Development<span>25</span></a></li>
											<li><a href="javascript:void(0);">SEO<span>20</span></a></li>
											<li><a href="javascript:void(0);">App Design<span>08</span></a></li>
											<li><a href="javascript:void(0);">Branding<span>22</span></a></li>
										</ul>
									</div>
									<div className="widget recent-posts-entry">
										<h2 className="widget-title">Recent Posts</h2>
										<div className="widget-post-bx">
											<div className="widget-post clearfix">
												<div className="dlab-media">
													<img src="images/blog/recent-blog/pic1.jpg" alt="" />
												</div>
												<div className="dlab-info">
													<h4 className="title"><a href="/blog-large-right-sidebar">Fusce mollis felis quis tristique</a></h4>
													<div className="dlab-meta">
														<ul>
															<li className="post-date"> 7 March, 2020 </li>
														</ul>
													</div>
												</div>
											</div>
											<div className="widget-post clearfix">
												<div className="dlab-media">
													<img src="images/blog/recent-blog/pic2.jpg" alt="" />
												</div>
												<div className="dlab-info">
													<h4 className="title"><a href="/blog-large-right-sidebar">Fusce mollis felis quis tristique</a></h4>
													<div className="dlab-meta">
														<ul>
															<li className="post-date"> 7 March, 2020 </li>
														</ul>
													</div>
												</div>
											</div>
											<div className="widget-post clearfix">
												<div className="dlab-media">
													<img src="images/blog/recent-blog/pic3.jpg" alt="" />
												</div>
												<div className="dlab-info">
													<h4 className="title"><a href="/blog-large-right-sidebar">Fusce mollis felis quis tristique</a></h4>
													<div className="dlab-meta">
														<ul>
															<li className="post-date"> 7 March, 2020 </li>
														</ul>
													</div>
												</div>
											</div>
											<div className="widget-post clearfix">
												<div className="dlab-media">
													<img src="images/blog/recent-blog/pic3.jpg" alt="" />
												</div>
												<div className="dlab-info">
													<h4 className="title"><a href="/blog-large-right-sidebar">Fusce mollis felis quis tristique</a></h4>
													<div className="dlab-meta">
														<ul>
															<li className="post-date"> 7 March, 2020 </li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* <div className="widget widget_archive">
										<h2 className="widget-title">Archives</h2>
										<ul>
											<li><a href="javascript:void(0);">January<span>05</span></a></li>
											<li><a href="javascript:void(0);">Fabruary<span>25</span></a></li>
											<li><a href="javascript:void(0);">March<span>20</span></a></li>
											<li><a href="javascript:void(0);">April<span>08</span></a></li>
											<li><a href="javascript:void(0);">May<span>22</span></a></li>
											<li><a href="javascript:void(0);">Jun<span>11</span></a></li>
											<li><a href="javascript:void(0);">July<span>19</span></a></li>
										</ul>
									</div> */}
									<div className="widget widget_tag_cloud">
										<h2 className="widget-title">Tags</h2>
										<div className="tagcloud">
											<a href="javascript:void(0);">Business</a>
											<a href="javascript:void(0);">News</a>
											<a href="javascript:void(0);">Brand</a>
											<a href="javascript:void(0);">Website</a>
											<a href="javascript:void(0);">Internal</a>
											<a href="javascript:void(0);">Strategy</a>
											<a href="javascript:void(0);">Brand</a>
											<a href="javascript:void(0);">Mission</a>
										</div>
									</div>
								</aside>
							</div>
						</div>
					</div>
				</section>

				{/* <!-- Call To Action --> */}
				<Cta />

			</div>
			<Footer />
		</>
	)
}
export async function getServerSideProps({ params }) {


	const slug = params.slug;

	const { data } = await client.query({
		query: gql`
			query Post($slug: String!){
			post(where: {slug: $slug}) {
				id
				category
				createdAt
				content {
					html
				}
				coverImage {
					url
				}
				postcomments {
					id
				}
				title
				tags
				slug
				seo {
					keywords
					title
					image {
					  url
					}
					description
				  }
				author {
					name
				}
				}
			}
		  
		`,
		variables: { slug }
	});

	console.log(data)

	// return {
	// 	props: {
	// 		post: data.posts
	// 	}, // will be passed to the page component as props
	// }

	return {
		props: {
			post: data.post
		}, // will be passed to the page component as props
	}
}
export default BlogDetails1;