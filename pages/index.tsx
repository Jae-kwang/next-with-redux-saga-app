import { NextPage } from 'next'
import { END } from 'redux-saga';
import { wrapper } from '../src/store';
import Link from 'next/link';
import { userAction } from '../src/actions'
import UserInfo from '../src/components/userInfo'

const Index: NextPage = () => {
  return (
    <div>
      <h1>Index Page</h1>
        <UserInfo />
        <br />
        <nav>
          <Link href="/other">
            <a>Navigate to "/other"</a>
          </Link>
        </nav>
    </div>
  );
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  store.dispatch(userAction.getUserSaga({ idx: 1 ,isServer : true }));
  store.dispatch(END);

  await store.sagaTask.toPromise();
});

export default Index;
