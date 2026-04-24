import { CalculatorButton } from '@/components/CalculatorButton';
import ThemeText from '@/components/ThemeText';
import { Colors } from '@/constants/theme';
import { useCalculator } from '@/hooks/useCalculator';
import { globalStyles } from '@/styles/global-styles';
import React from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const BUTTON_GAP = 12;
const MAX_BUTTON_SIZE = 80;

const CalculatorApp = () => {
    const { width } = useWindowDimensions();
    const insets = useSafeAreaInsets();

    const availableWidth = width - insets.left - insets.right - 32;
    const buttonSize = Math.min(MAX_BUTTON_SIZE, (availableWidth - BUTTON_GAP * 3) / 4);
    const doubleButtonSize = buttonSize * 2 + BUTTON_GAP;

    const {
        formula,
        number,
        prevNumber,
        clean,
        toggleSign,
        deleteLastDigit,
        buildNumber,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateResult
    } = useCalculator();

    return (
        <View style={[globalStyles.calculatorContainer, { paddingBottom: Math.max(insets.bottom, 12) }]}>

            {/* Resultados */}
            <View style={{ paddingHorizontal: 30, marginBottom: 20 }}>
                <ThemeText variant='h1' >{formula}</ThemeText>
                {
                    formula === prevNumber && formula !== number ? (
                        <ThemeText variant='h2'> </ThemeText>
                    ) : (
                        <ThemeText variant='h2'>{prevNumber}</ThemeText>
                    )
                }
            </View>

            {/* Filas de botones */}
            <View style={globalStyles.row}>
                {/* Botones */}
                <CalculatorButton
                    label='C'
                    blackText
                    color={Colors.lightGray}
                    buttonSize={buttonSize}
                    onPress={clean}
                />
                <CalculatorButton
                    label='+/-'
                    blackText
                    color={Colors.lightGray}
                    buttonSize={buttonSize}
                    onPress={toggleSign}
                />
                <CalculatorButton
                    label='del'
                    blackText
                    color={Colors.lightGray}
                    buttonSize={buttonSize}
                    onPress={deleteLastDigit}
                />
                <CalculatorButton
                    label='÷'
                    color={Colors.orange}
                    buttonSize={buttonSize}
                    onPress={divideOperation}
                />
            </View>
            <View style={globalStyles.row}>
                {/* Botones */}
                <CalculatorButton
                    label='7'
                    buttonSize={buttonSize}
                    onPress={() => buildNumber('7')}
                />
                <CalculatorButton
                    label='8'
                    buttonSize={buttonSize}
                    onPress={() => buildNumber('8')}
                />
                <CalculatorButton
                    label='9'
                    buttonSize={buttonSize}
                    onPress={() => buildNumber('9')}
                />
                <CalculatorButton
                    label='X'
                    color={Colors.orange}
                    buttonSize={buttonSize}
                    onPress={multiplyOperation}
                />
            </View>
            <View style={globalStyles.row}>
                {/* Botones */}
                <CalculatorButton
                    label='4'
                    buttonSize={buttonSize}
                    onPress={() => buildNumber('4')}
                />
                <CalculatorButton
                    label='5'
                    buttonSize={buttonSize}
                    onPress={() => buildNumber('5')}
                />
                <CalculatorButton
                    label='6'
                    buttonSize={buttonSize}
                    onPress={() => buildNumber('6')}
                />
                <CalculatorButton
                    label='-'
                    color={Colors.orange}
                    buttonSize={buttonSize}
                    onPress={subtractOperation}
                />
            </View>
            <View style={globalStyles.row}>
                {/* Botones */}
                <CalculatorButton
                    label='1'
                    buttonSize={buttonSize}
                    onPress={() => buildNumber('1')}
                />
                <CalculatorButton
                    label='2'
                    buttonSize={buttonSize}
                    onPress={() => buildNumber('2')}
                />
                <CalculatorButton
                    label='3'
                    buttonSize={buttonSize}
                    onPress={() => buildNumber('3')}
                />
                <CalculatorButton
                    label='+'
                    color={Colors.orange}
                    buttonSize={buttonSize}
                    onPress={addOperation}
                />
            </View>
            <View style={globalStyles.row}>
                {/* Botones */}
                <CalculatorButton
                    label='0'
                    buttonSize={buttonSize}
                    doubleButtonSize={doubleButtonSize}
                    doubleSize
                    onPress={() => buildNumber('0')}
                />
                <CalculatorButton
                    label='.'
                    buttonSize={buttonSize}
                    onPress={() => buildNumber('.')}
                />
                <CalculatorButton
                    label='='
                    color={Colors.orange}
                    buttonSize={buttonSize}
                    onPress={calculateResult}
                />
            </View>
        </View >
    );
};

export default CalculatorApp;
