import { ConfigProvider as AntdConfigProvider } from 'antd';
import { PropsWithChildren } from 'react';

const ConfigProvider = (props: PropsWithChildren) => {
  return (
    <AntdConfigProvider
      theme={{
        cssVar: true,
        hashed: false,
        components: {
          Dropdown: {
            colorBgElevated: '#0D0D0D',
            colorText: '#FFFFFF',
            fontSize: 16,
            paddingBlock: 10,
          },
          Modal: {
            contentBg: '#222427',
            headerBg: '#222427',
            titleColor: '#FFFFFF',
          },
          Input: {
            colorBgContainer: 'transparent',
            colorBorder: 'rgba(203, 203, 232, 0.40)',
            activeBorderColor: '#FFFFFF',
          },
          Select: {
            selectorBg: 'transparent',
            colorBorder: 'rgba(203, 203, 232, 0.40)',
          },
        },
      }}
    >
      {props.children}
    </AntdConfigProvider>
  );
};

export default ConfigProvider;
