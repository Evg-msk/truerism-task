import React from "react";
import { Box, Image, Button, Icon, Heading } from "@chakra-ui/core";
import {StarIcon} from '@chakra-ui/icons';


export default function tour() {
        const property = {
            imageUrl: "https://bit.ly/2Z4KKcF",
            imageAlt: "Rear view of modern home with pool",
            title: "Оленевка Village ",
            formattedPrice: "от 1250*",
            reviewCount: 34,
            rating: 4,
        };
    return (
        <>
            <Box d="flex" flexDir="column" p="83px 84px 0 0">
        <Heading as="h3" textAlign="right" fontWeight="400" fontSize="14px"> Найдено ххх вариантов </Heading>
        <Box w="827px" mh="304px" borderWidth="1px" rounded="lg" overflow="hidden" d="flex">
            <Image src={property.imageUrl} alt={property.imageAlt} w="240px" />

            <Box p="6">
                <Box d="flex" mt="2" alignItems="center">
                    {Array(5)
                        .fill("")
                        .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < property.rating ? "blue.500" : "gray.300"}
                            />
                        ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                         Новогодний тур, Наименование туроператора
                    </Box>
                </Box>

                <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                >
                    {property.title}
                </Box>

                <Box d="flex" alignItems="baseline" mt="15px">
                    Москва, Московская область -

                    Крым, Форос
                </Box>
                <Box mt="19px"> Трансфер из Симферополя, автобус </Box>
                <Box mt="18px"> Двухместный номер, отель </Box>
                <Box mt="17px"> Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообра </Box>

                <Button mt="15px">
                    {property.formattedPrice}
                </Button>


            </Box>
        </Box>
            </Box>
            </>
    )
};