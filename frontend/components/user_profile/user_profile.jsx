import React from 'react';
import UploadButton from '../shared/upload_button';
import {getLocation} from '../../util/user_api_util';
import { Link, withRouter } from 'react-router-dom';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: "",
      state: ""
    };
    this.currentLocation = this.currentLocation.bind(this);
    this.setLocation = this.setLocation.bind(this);
    // this.memberSince = this.memberSince.bind(this);
  }

  currentLocation(pos) {
    let coord = pos.coords;
    let lat = coord.latitude;
    let lng = coord.longitude;
    let params = `${lat},${lng}`;

    const apiKey = "AIzaSyCbq38WBZIYrNol3TjlRGjL9T5dhqoefqI";
    let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=";

    if (lat) {
      url += params;
      url += `&key=${apiKey}`;
    } else {
      return <h1>Loading</h1>;
    }
    getLocation(url, this.setLocation);
  }

  setLocation(data) {
    let address = data.results[0].formatted_address;
    let city = address.split(', ')[1];
    let state = address.split(', ')[2].split(" ")[0];

    // this.setState({city: city, state: state});
    // this.props.updateUser({location: `${city, state}`});
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(this.currentLocation);
  }

  displayName() {
    return <h4>{this.props.currentUser.name}</h4>;
  }
  // member account created at
  memberSince() {
    let month, day, year;
    const registered_at = Date.apply(this.props.currentUser.created_at).split(" ");

    month = registered_at[1];
    day = registered_at[2];
    year = registered_at[3];
    return <h4>{month} {day}, {year}</h4>;
  }

  email() {
    if (this.props.currentUser.email) {
      return <h4>{this.props.currentUser.email}</h4>;
    } else {
      return <h4>n/a</h4>;
    }
  }

  selfBlurb() {
    if (this.props.currentUser.description) {
      return <text>{this.props.currentUser.description}</text>;
    } else {
      return <h4>fill in your blurb</h4>;
    }
  }

  followingGroup() {
    return (
      <h5>You aren't in any groups yet.</h5>
    );
  }

  renderImage() {
    return (
      this.props.currentUser.profile_img ?
      this.props.currentUser.profile_img :
      'https://res.cloudinary.com/dsetpdsls/image/upload/v1478804396/defaultIcon_unkrse.png'
    )
  }
  render() {
    return (
      <div className="container user-profile">
        <div className="col-xs-8 d-flex ">

        </div>
        <div className='col-xs-4 d-flex flex-column justify-content-around'>
          <img src={this.renderImage()} className="rounded" width='200' height='200'></img>
          <hr></hr>
          <UploadButton
            createImage={this.props.createImage}/>
        </div>
      </div>
    )
  }
}
export default withRouter(UserProfile);

// render () {
//   let klass;
//   if (this.props.user_image) {
//     klass = {backgroundImage: `url('${this.props.user_image}')`};
//   } else {
//     klass = {backgroundImage:
//       `url('https://res.cloudinary.com/dsetpdsls/image/upload/v1478804396/defaultIcon_unkrse.png')`};
//   }
//
//   let location = <h4>Loading...</h4>;
//   if (this.state.city) {
//     location = <h4>{this.state.city}, {this.state.state}</h4>;
//   }
//
//   return (
    // <div className="profile-main-div">
    //   <div className="profile-div">
    //     <div className="profile-detail">
    //       <div className="username">{this.props.currentUser}</div>
    //       <div className="detail">
    //         <h2>Name: {this.displayName()}</h2>
    //         <h2>Location: {location} </h2>
    //         <h2>Member Since: {this.memberSince()}</h2>
    //         <h2>Email: {this.email()}</h2>
    //         <h2>Description {this.selfBlurb()}</h2>
    //       </div>
    //       <a>Add bio</a>
    //       <div className="groups">
    //         {this.followingGroup()}
    //       </div>
    //       <div></div>
    //     </div>
    //     <div className="profile-picture">
    //       <div className="image" style={klass}>
    //       </div>
    //       <div className="image-options">
    //         <UploadButton
    //           createImage={this.props.createImage} className="post-image-button"/>
    //       </div>
    //     </div>
    //   </div>
    // </div>
//   );
// }
// }
