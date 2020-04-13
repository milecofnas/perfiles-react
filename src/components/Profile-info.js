import React from 'react';
import styled from 'styled-components';

const Section = styled.section `
       
  .profile-content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 30px;
  }
  .profile-img {
        display: inline-block;
        position: relative;
        width: 200px;
        height: 200px;
        overflow: hidden;
        border-radius: 50%;
        border: 2px solid white; 
        margin-right: 75px;
      img {
        width: auto;
        height: 100%;
        margin-left: -50px;
      }
  }
  .profile-info {
      margin-right: 200px;
      .profile-title {
          width: 200px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          p{
              font-weight: bold;
          }
          button {
            background-color: transparent;
            border: 1px solid grey;
            height: 25px;
            font-family: inherit; 
            cursor: pointer; 
          }
      }
      .profile-numbers {
          display: flex;
          align-items: center;
          justify-content: center;
          p{
              margin-right: 20px; 
              span {
                  font-weight: bold;
                  margin-right: 2px; 
              }
          }
      }
  }
`

const Profile = () => {
    return (
        <Section>
            <div className="profile-content">
            <div className="profile-img">
                <img src={'https://www.jardineriaon.com/wp-content/uploads/2018/04/flores-decorativas-y-vistosas.jpg'}></img>
            </div>
            <div className="profile-info">
                <div className="profile-title"> 
                    <p>milecofnas</p>
                    <button>Edit Profile</button>
                </div>
                <div className="profile-numbers">
                    <p><span>5</span>post</p>
                    <p><span>100</span>followers</p>
                    <p><span>80</span>following</p>
                </div>
                <div>
                    <p>BIO</p>
                </div>
            </div>
            </div>
        </Section>
    );
};

export default Profile;