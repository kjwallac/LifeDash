import { useState, useEffect } from "react";
import ProfileHeader from "../components/ProfileHeader";
import SwiperPics from "../components/Swiper/Swiper";
import ProfileBody from "../components/ProfileBody";
import { useParams } from "react-router-dom";
import CommentBox from "../components/commentsbox/CommentBox";
import { BackButton } from "../components/BackButton/BackButton";
import ProfileLinks from "../components/ProfileLinks";
import { Loading } from "../components/Loading";
import { API } from "../utils/API";

export default function Profile() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState(null);
  const { profileId } = useParams();

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchData() {
    const res = await API.getProfile(profileId);
    setProfile(res.data);
    setLoading(false);
  }

  return (
    <>
      <BackButton />
      {loading ? (
        <Loading />
      ) : (
        <>
          {profile && (
            <>
              <ProfileHeader profile={profile} />
              <SwiperPics profile={profile} />
              <ProfileBody profile={profile} />
              <ProfileLinks profile={profile}/>
              <CommentBox profile={profile} />
            </>
          )}
        </>
      )}
    </>
  );
}
