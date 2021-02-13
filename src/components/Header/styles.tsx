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
    h4 {
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
        color: #058996;

        .MuiListItem-button {
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;
