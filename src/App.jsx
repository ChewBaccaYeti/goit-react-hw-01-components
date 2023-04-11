import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends';
import transactions from 'data/transactions';
import { GlobalStyle } from 'GlobalStyle';
import { Profile } from './components/Profile/Profile';
import { Layout } from './components/Layout/Layout.styled';
import { Statistics } from './components/Statistics/Statistics';
import { FriendList } from './components/Friends/FriendList/FriendList';
import { TransactionHistory } from './components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <Layout>
      <Profile user={user} />
      <Statistics title="Upload statistics" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle />
    </Layout>
  );
};
