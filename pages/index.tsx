import { NextPage } from 'next'
import { END } from 'redux-saga';
import { wrapper } from '../src/store';
import Link from 'next/link';
import { userAction } from '../src/actions'
import UserInfo from '../src/components/userInfo'
import { SagaStore } from '../src/store'

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

// 해당 Page에 접근시 매번 수행
export const getServerSideProps = wrapper.getServerSideProps(
  async (context) => {
    console.log('2. Page.getStaticProps uses the store to dispatch things');
    context.store.dispatch(userAction.getUserSaga({ idx: 1, isServer : true }));

    // 1: 모든 sagaTask가 완료되었다는 상태를 Store에 dispatch 한다.
    context.store.dispatch(END);

    // 2: runSaga로 생성한 saga 작업을 Promise를 받고, 모두 종료되면 resolve 된다.
    await (context.store as SagaStore).sagaTask.toPromise();
});


/*
// build시 한번만 수행 
export const getStaticProps = wrapper.getStaticProps(
 ... 
});
*/

export default Index;
