import {createNavigationContainerRef} from '@react-navigation/native';

const navigationRef = createNavigationContainerRef<MainRouteParamList>();

enum MainRouteName {
    MainScreen = 'MainScreen',
    HomeScreen = "HomeScreen",
    NotificationScreen = "NotificationScreen",
    ActivityScreen = "ActivityScreen",
    SummaryContent = "SummaryContentScreen",
    ChallengeScreen = "ChallengeScreen",
    RewardScreen = "RewardScreen",
    SubscriptionScreen = "SubscriptionScreen",
    ProfileScreen = "ProfileScreen",
    PaymentScreen = "PaymentScreen"
}

export type MainRouteParamList = {
    MainScreen: undefined;
    PaymentScreen: undefined,
    HomeScreen: undefined,
    NotificationScreen: undefined;
    ActivityScreen: undefined;
    SummaryContentScreen: undefined;
    ChallengeScreen: undefined,
    RewardScreen: undefined;
    SubscriptionScreen: undefined;
    ProfileScreen: undefined;
}


export {MainRouteName, navigationRef};