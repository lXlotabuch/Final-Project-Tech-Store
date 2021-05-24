import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import { getSubscriber } from '../../../store/subscriptions/middleware'
import { BlockInfo, TextInfo } from '../StyledDashBoard';
import SubscribedUser from './SubscribedUser';
import NotSubscribedUser from './NotSubscribedUser';

const Subscribe = ({ email }) => {
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    let cleanUpFlag = false;

    const getSubscriberInfo = async () => {
      if (typeof email === 'string') {
        const { status } = await getSubscriber(email);
        if (!cleanUpFlag) {
          if (status === 200) {
            setIsSubscribed(() => true)
          } else {
            setIsSubscribed(() => false)
          }
        }
      }
    }

    getSubscriberInfo()
    return () => cleanUpFlag = true
  }, [email, isSubscribed, setIsSubscribed])

  return (
    <BlockInfo>
      <h4>Newsletters</h4>
      <div>
        <TextInfo>
          {isSubscribed ? <SubscribedUser />
            : (
              <NotSubscribedUser
                email={email}
                setIsSubscribed={setIsSubscribed}
              />
            )}
        </TextInfo>
      </div>
    </BlockInfo>
    
  );
}
Subscribe.propTypes = {
  email: PropTypes.string
}
Subscribe.defaultProps = {
  email: '',
}
export default Subscribe;
