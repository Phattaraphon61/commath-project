// import React, { Component } from 'react'
// import { Menu, Segment } from 'semantic-ui-react'

// export default class Number1 extends Component {
//   state = { activeItem: 'home' }

//   handleItemClick = (e, { name }) => this.setState({ activeItem: name })

//   render() {
//     const { activeItem } = this.state

//     return (
//       <Segment inverted>
//         <Menu inverted pointing secondary>
//           <Menu.Item
//             name='home'
//             active={activeItem === 'home'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Item
//             name='messages'
//             active={activeItem === 'messages'}
//             onClick={this.handleItemClick}
//           />
//           <Menu.Item
//             name='friends'
//             active={activeItem === 'friends'}
//             onClick={this.handleItemClick}
//           />
//         </Menu>
//       </Segment>
//     )
//   }
// }
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core'

export default function Page1() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
      <Box justifyContent="center">
        <h1>บทที่ 1 Basic Computing</h1>
      </Box>
        

      </Container>
    </React.Fragment>
  )
}
