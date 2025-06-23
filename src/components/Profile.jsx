import './Profile.css'

export default function Profile({ postCount }) {
  return (
    <div className="profile-header">
        <img className="profile-img" src="/profile_img.png" alt="profile"/>
        <div className="profile-info">
          <div className="profile-top">
            <h2 className="profile-id">@ likeLion_inha</h2> 
            <button className="btn1"> 팔로우 </button>
            <button className="btn2"> 메시지 보내기 </button>
          </div>
          <p className="profile-name">멋쟁이 사자처럼 at 인하대학교</p>
          <p className="profile-posts">게시물 {postCount} | 팔로워 304 | 팔로우 92</p>
          <p className="profile-desc">멋쟁이사자처럼 인하대학교 공식계정입니다.</p>
        </div>
    </div>



  );
}