import React from 'react';
// import styled from 'styled-components';

const List = styled.div`
  background-color: white;
  list-style: none;
  // padding-top: 14px;
  // padding-bottom: 14px;

  :hover {
    background-color: silver;
  }
`;

const LocationIcon = styled.i`
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 30px;
  padding-left: 30px;
`;

const IconColor = styled.span`
  color: #484848;
`;

const LocationList = (props) => (
  console.log(props),
  <div>
    {props.locations.map(location =>
      <List key={location.city}>
        <IconColor>
          <LocationIcon className="fas fa-map-marker-alt" />
        </IconColor>
        {`${location.city}, ${location.country}`}
      </List>
    )}
  </div>
)

export default LocationList;
