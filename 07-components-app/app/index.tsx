import { animationMenuRoutes, menuRoutes, uiMenuRoutes } from '@/constants/Routes';
import MenuItem from '@/presentation/menu/MenuItem';
import ThemedView from '@/presentation/shared/ThemedView';
import { Href, Link } from 'expo-router';
import { View } from 'react-native';

const ComponentsApp = () => {
    return (
        <ThemedView margin>
            {animationMenuRoutes.map((route, index) => (
                <Link
                    key={route.name}
                    href={route.name.split('/')[0] as Href}>
                    <MenuItem
                        title={route.title}
                        icon={route.icon}
                        name={route.name}
                        isFirst={index === 0}
                        isLast={index === animationMenuRoutes.length - 1}
                    />
                </Link>
            ))}

            <View className='my-3' />

            {uiMenuRoutes.map((route, index) => (
                <Link
                    key={route.name}
                    href={route.name.split('/')[0] as Href}>
                    <MenuItem
                        title={route.title}
                        icon={route.icon}
                        name={route.name}
                        isFirst={index === 0}
                        isLast={index === uiMenuRoutes.length - 1}
                    />
                </Link>
            ))}

            <View className='my-3' />

            {menuRoutes.map((route, index) => (
                <Link
                    key={route.name}
                    href={route.name.split('/')[0] as Href}>
                    <MenuItem
                        title={route.title}
                        icon={route.icon}
                        name={route.name}
                        isFirst={index === 0}
                        isLast={index === menuRoutes.length - 1}
                    />
                </Link>
            ))}
        </ThemedView>
    );
};

export default ComponentsApp;