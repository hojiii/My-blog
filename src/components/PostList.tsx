import { Link } from "react-router-dom";

interface postListProps {
  hasNavigation :boolean;
}

export default function PostList({hasNavigation = true}){
  return(
    <>
    {hasNavigation &&(
      <div className="post__navigation">
        <div className="post__navigation--active">전체</div>
        <div>나의 글</div>
      </div>
    )}
    <div className="post__list">
        {[...Array(10)].map((e,index)=>(
          <div key={index} className="post__box">
            <Link to={`/posts/${index}`}>
              <div className="post__profile-box">
                <div className="post__profile"/>
                <div className="post__author-name">김지호</div>
                <div className="post__date">2023.11.25</div>
              </div>
              <div className="post__title">게시글 {index}</div>
              <div className="post__text">
                RkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkr
                krRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkr
                krRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkr
                krRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrk
                rRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkr
                RkskekekrkrkrRkskek
                ekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskeke
                krkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkrRkskekekr
                krkrRkskekekrkrkrRkskekekrkrkrRkskekekrkrkr
              </div>
              <div className="post__util-box">
                <div className="post__delete">삭제</div>
                <div className="post__edit">수정</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}