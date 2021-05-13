import React, { useState, useEffect } from "react";
import ProfileHeader from "../components/ProfileHeader";
import SwiperPics from "../components/Swiper/Swiper";
import ProfileBody from "../components/ProfileBody";
import { useParams } from "react-router-dom";
import { executeApiRequest } from "../utils/apiHelper";
// import ProfileLinks from "../components/ProfileLinks";

export default function Profile() {
  const [profile, setProfile] = useState(null);
  const { profileId } = useParams();

  useEffect(() => {
    executeApiRequest(`/api/profile/${profileId}`).then(setProfile);
  }, [profileId]);

  return (
    <>
      {profile && (
        <>
          <ProfileHeader profile={profile} />
          <SwiperPics profile={profile} />
          <ProfileBody profile={profile} />
          {/* <ProfileLinks profile={profile}/> */}
        </>
      )}
    </>
  );
}
