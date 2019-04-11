import React from 'react';
import $ from 'jquery';
import LocationList from './locationlist.jsx';
// import styled from 'styled-components';

const FontColor = '#484848';
const FontStyle = 'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif';

const NavModule = styled.div`
  height: 100px;
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  width: 70%;
  margin: 0;
  float: left;
`;

const Logo = styled.img`
  height: 100px;
  width: 100px;
`;

const SearchBar = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  heigth: 70px;
  width: 100%;
  padding: 15px;
`;

const SearchBox = styled.div`
  border-width: 1px;
  border-style: solid;
  border-color: ${FontColor};
  width: 55%;
  display: flex;
  flex-direction: row;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
  transition: all 0.3s ease-in-out;

  :hover {
    box-shadow: 0 5px 15px rgba(0,0,0,0.6);
    transition: all 0.3s ease-in-out;
  }
`;

const SearchInput = styled.input`
  width: 80%;
  height: 50px;
  border: 0px;
  color: ${FontColor};
  font-family: ${FontStyle};
  font-size: 20px;
  
  :focus {
    outline: none;
  }
`;

const SearchOutput = styled.div`
  margin: 0px;
  margin-left: 1px;
  // border-style: solid;
  // border-color: white;
  width: 55%;
`;

const FinderIcon = styled.i`
  display: flex;
  justify-content: center;
`;

const FinderSize = styled.span`
  font-size: 25px;
  color: ${FontColor};
  width: 70px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBar = styled.div`
  display: flex;
  float: right;
  width: 30%;
  margin: 0;
  height: 100px;
  align-items: center;
  justify-content: center;
`;

const NavButtons = styled.span`
  font-family: ${FontStyle};
  color: ${FontColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin-right: 15px;
  padding-right: 5px;
  padding-left: 5px;
  height: 80px;
  border-bottom: 2px solid transparent;

  :hover {
    // border-bottom-width: 2px;
    // border-style: solid;
    // border-color: #484848;
    border-bottom: 2px solid #484848;

  }
`;

const SearchOutputBox = styled.div`
  height: 0px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      locations: null,
    };
  }

  query() {
    const { query } = this.state
    if (query === '') {
      this.setState({locations: null})
    } else {
      var string = query[0].toUpperCase() + query.slice(1);
      $.ajax({
        method: 'GET',
        url: `/api/location/${string}`,
        // url: 'http://localhost:3223/location',
        // data: {loc: string},
        success: dbLocations => this.setState({locations: dbLocations.slice(0, 5)}),
        error: () => (console.log('fail')),
      })
    }
  }

  render() {
    return (
      <NavModule>
      <TopBar>  
        <Logo className="icon" src="images/lodge.jpg" />
        <SearchBar>
          <SearchBox>
            <FinderSize>
              <FinderIcon className="fas fa-search" />
            </FinderSize>
            <SearchInput onChange={e => {this.setState({query: e.target.value}, this.query)}}/>
          </SearchBox>
          <SearchOutputBox>
            <SearchOutput>
              {this.state.locations ? <LocationList locations={this.state.locations}/> : null}
            </SearchOutput>
          </SearchOutputBox>
        </SearchBar>
      </TopBar>
      <NavBar>
        <NavButtons>Become a host</NavButtons>
        <NavButtons>Help</NavButtons>
        <NavButtons>Sign up</NavButtons>
        <NavButtons>Log in</NavButtons>
      </NavBar>
      </NavModule>
    );
  }
}

export default App;
