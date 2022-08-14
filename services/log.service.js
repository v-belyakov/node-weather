import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed('ERROR' + ' ' + error));
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen('SUCCESS' + ' ' + message));
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan('HELP')}
    without args - print weather
    -t [API_KEY] save token
    -s [CITY] set the city
    -h show help
    `,
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent`${chalk.bgYellow(' WEATHER ')} city weather ${res.name}
		${icon}  ${res.weather[0].description}
		temperature: ${res.main.temp} (feels like ${res.main.feels_like})
		humidity: ${res.main.humidity}%
		wind speed: ${res.wind.speed}
		`,
  );
};

export { printError, printSuccess, printHelp, printWeather };
