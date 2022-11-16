import React from 'react'
import Logo from '../../../components/UI/Logo/Logo'
import Avatar from '../../../components/UI/Avatar/Avatar'

const MyProfileTop = ({ user }) => (
  <div className="profile_sidebar_top">
    <div className="profile_sidebar_top_logo">
      <Logo className="profile_logo" />
    </div>
    <div className="profile_sidebar_top_user">
      <Avatar className="profile_sidebar_top_user_avatar" />
      <div>
        <p className="profile_sidebar_top_user_username">{user?.username} Асанов Усон</p>
        <p className="profile_sidebar_top_user_role">{user?.role} преподователь</p>
      </div>
    </div>
  </div>
)

export default MyProfileTop