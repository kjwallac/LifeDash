import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { API } from "../utils/API";
import { Loading } from "../components/Loading";
import QRCode from "qrcode.react";
// import { SearchBar } from "../components/Search/SearchBar";
import {
  Container,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Avatar,
} from "@material-ui/core";

export const SearchProfile = () => {
  const [loading, setLoading] = useState(true);
  const [profiles, setProfiles] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetchProfiles();
    // eslint-disable-next-line
  }, []);

  const fetchProfiles = async () => {
    const res = await API.getAllProfiles();
    setProfiles(res.data.filter(({ status }) => status === "public"));
    setLoading(false);
  };

  return (
    <Container maxWidth="sm" style={{ height: "100%" }}>
      {/* <SearchBar handleSearchChange={handleSearchChange} /> */}
      {loading && <Loading />}
      {!loading && (
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Profile</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Life</TableCell>
                <TableCell align="left">QR</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {profiles.length ? (
                profiles.map((profile) => (
                  <TableRow key={profile._id}>
                    <TableCell
                      onClick={() => history.push(`/profile/${profile._id}`)}
                    >
                      <Avatar src={profile.profileImage} />
                    </TableCell>
                    <TableCell
                      onClick={() => history.push(`/profile/${profile._id}`)}
                    >
                      {profile.firstName} {profile.lastName}
                    </TableCell>
                    <TableCell
                      onClick={() => history.push(`/profile/${profile._id}`)}
                    >
                      {profile.bornDate} {profile.deathDate}
                    </TableCell>
                    <TableCell>
                      <QRCode
                        value={`https://lifedash-memorial.herokuapp.com/profile/${profile._id}`}
                        size={35}
                        bgColor={"#ffffff"}
                        fgColor={"#000000"}
                        level={"L"}
                        includeMargin={false}
                        renderAs={"svg"}
                      />
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <p>No Profiles Available</p>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default SearchProfile;
