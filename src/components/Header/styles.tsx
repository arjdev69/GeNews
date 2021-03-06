import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    flex: 1;
    display: flex;
    align-items: center;
    p {
      margin-right: 0px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    .contentHeader {
      flex: 1;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;

      a {
        font-weight: bold;
        color: ${(props) => (props.color ? props.color : "#CCEE")};

        .MuiListItem-button {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .MuiListItemIcon-root {
          align-items: center;
          justify-content: center;
        }
        .MuiTypography-body1 {
          font-size: 12px !important;
        }
      }
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;
