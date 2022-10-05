import React from 'react'

const CommentSection = () => {
    return (
        <>
            <div className="clear" id="comment-list">
                <div className="comments-area style-1" id="comments">
                    <h2 className="comments-title">8 Comments</h2>
                    <div className="clearfix">
                        {/* <!-- comment list END --> */}
                        <ol className="comment-list">
                            <li className="comment">
                                <div className="comment-body">
                                    <div className="comment-author vcard">
                                        <img className="avatar photo" src="images/testimonials/pic1.jpg" alt="" />
                                        <cite className="fn">Celesto Anderson</cite>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="reply">
                                        <a href="javascript:void(0);" className="comment-reply-link">
                                            <i className="fa fa-reply"></i>Reply</a>
                                    </div>
                                </div>
                                <ol className="children">
                                    <li className="comment odd parent">
                                        <div className="comment-body">
                                            <div className="comment-author vcard">
                                                <img className="avatar photo" src="images/testimonials/pic2.jpg" alt="" />
                                                <cite className="fn">Jake Johnson</cite>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                            <div className="reply">
                                                <a href="javascript:void(0);" className="comment-reply-link">
                                                    <i className="fa fa-reply"></i>Reply</a>
                                            </div>
                                        </div>
                                        {/* <!-- list END --> */}
                                    </li>
                                </ol>
                                {/* <!-- list END --> */}
                            </li>
                            <li className="comment">
                                <div className="comment-body">
                                    <div className="comment-author vcard">
                                        <img className="avatar photo" src="images/testimonials/pic1.jpg" alt="" />
                                        <cite className="fn">John Doe</cite>
                                    </div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                    <div className="reply">
                                        <a href="javascript:void(0);" className="comment-reply-link">
                                            <i className="fa fa-reply"></i>Reply</a>
                                    </div>
                                </div>
                            </li>
                        </ol>
                        {/* <!-- comment list END --> */}
                        {/* <!-- Form --> */}
                        <div className="comment-respond style-1" id="respond">
                            <h2 className="comment-reply-title" id="reply-title">Leave a Reply <small> <a style={{ "display": "none" }} href="javascript:void(0);" id="cancel-comment-reply-link" rel="nofollow">Cancel reply</a> </small> </h2>
                            <form className="comment-form" id="commentform" method="post">
                                <p className="comment-form-author">
                                    <label htmlFor="author">Name <span className="required">*</span></label>
                                    <input type="text" name="Author" placeholder="Author" id="author" />
                                </p>
                                <p className="comment-form-email">
                                    <label htmlFor="email">Email <span className="required">*</span></label>
                                    <input type="text" placeholder="Email" name="email" id="email" />
                                </p>
                                <p className="comment-form-url">
                                    <label htmlFor="url">Website</label>
                                    <input type="text" placeholder="Website" name="url" id="url" />
                                </p>
                                <p className="comment-form-comment">
                                    <label htmlFor="comment">Comment</label>
                                    <textarea rows="8" name="comment" placeholder="Comment" id="comment"></textarea>
                                </p>
                                <p className="form-submit">
                                    <button type="submit" className="btn btn-link d-inline-flex align-items-center" id="submit"><i className="fa fa-angle-right m-r10"></i>Submit Now</button>
                                </p>
                            </form>
                        </div>
                        {/* <!-- Form --> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default CommentSection