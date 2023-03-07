import  { Interweave, InterweaveProps, MatcherInterface } from 'interweave';
import { IpMatcher, UrlMatcher, EmailMatcher } from 'interweave-autolink';


const BInterweave = ({ filters = [], matchers = [], ...props}: InterweaveProps) => {

    const globalMatchers: MatcherInterface[] = [
        new EmailMatcher('email'),
        new IpMatcher('ip'),
        new UrlMatcher('url'),
    ];

    return (
        <Interweave
            matchers={[...globalMatchers, ...matchers]}
            {...props}
        />
    );
}

export default BInterweave;
