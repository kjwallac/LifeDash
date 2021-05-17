import { useEffect, useState, Fragment } from "react";
import { API } from "../../utils/API";
import { Loading } from "../../components/Loading";
import { CssBaseline, List, ListItem } from "@material-ui/core";

export const ProfileList = (props) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const { id } = props.match.params;
    const res = await API.getUserProfiles(id);
    setData(res.data);
    setLoading(false);
  };

  return (
    <Fragment>
      <CssBaseline />
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <h1
            style={{
              margin: "1.5rem auto",
              textAlign: "center",
              borderBottom: "1px solid gray",
              padding: "1rem",
            }}
          >
            Profiles Curated: {data.length}
          </h1>
          <List
            style={{
              margin: "1rem",
              padding: "0 0.5rem",
            }}
          >
            {data.map(
              ({
                _id,
                firstName,
                lastName,
                bornDate,
                deathDate,
                profileImage,
                quote,
                status,
              }) => (
                <ListItem
                  key={_id}
                  divider
                  dense
                  disableGutters
                  style={{ marginBottom: "1rem" }}
                >
                  <img
                    src={profileImage}
                    alt="profile"
                    width="100px"
                    style={{ marginRight: "0.8rem", borderRadius: "4rem" }}
                  />
                  <div style={{ margin: "0 auto", textAlign: "center" }}>
                    <h2 style={{ margin: "0" }}>
                      {firstName} {lastName}
                    </h2>
                    <h3 style={{ margin: "0" }}>
                      {bornDate} - {deathDate}
                    </h3>
                    <p style={{ margin: "0" }}>{quote}</p>
                  </div>
                </ListItem>
              )
            )}
          </List>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProfileList;
