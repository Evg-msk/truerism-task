import {ChakraProvider, Checkbox, CheckboxGroup, Input, Heading, Box} from "@chakra-ui/core";
import Head from "next/head";
import type, { AppProps } from "next/app";
import { QueryCache, ReactQueryCacheProvider } from "react-query";
import { appTheme } from "theme";
import React from "react";
import Tour from "./Tour";


const queryCache = new QueryCache({
  defaultConfig: {
    queries: {
      retry: 0,
      retryDelay: () => 0,
      refetchOnWindowFocus: false,
    },
  },
});


export default function DemoApp(props: AppProps) {
    const {Component, pageProps} = props;
    const [value, setValue] = React.useState("");
    const handleChange = event => setValue(event.target.value);

        return (
            <div>
                <Head>
                    <title>truerism task</title>
                </Head>

                <ReactQueryCacheProvider queryCache={queryCache}>
                    <ChakraProvider resetCSS theme={appTheme}>
                        <Box d="flex">
                        <Box
                            d="flex"
                            flexDir="column"
                            w={1/2}
                            p="83px 0 0 83px"
                        >
                            <Heading as="h1" fontSize="lg" fontWeight="bold"> Тип тура </Heading>
                            <CheckboxGroup size="lg">
                                <Checkbox value="Новогодний тур">Новогодний тур</Checkbox>
                                <Checkbox value="Тур выходного дня">Тур выходного дня</Checkbox>
                                <Checkbox value="Тур на море">Тур на море</Checkbox>
                                <Checkbox value="Активный отдых">Активный отдых</Checkbox>
                                <Checkbox value="Охота и рыбалка">Охота и рыбалка</Checkbox>
                            </CheckboxGroup>
                            <Heading as="h2" fontSize="lg" fontWeight="bold" mt="4"> Наименование туроператора </Heading>
                            <Input
                                value={value}
                                onChange={handleChange}
                                placeholder="Туроператор"
                                size="sm"
                                w={256}
                                h='48px'
                                mt="14px"
                            />
                        </Box>
                            <Tour/>
                        </Box>
                        <Component {...pageProps} />
                    </ChakraProvider>
                </ReactQueryCacheProvider>
            </div>
        );
    }