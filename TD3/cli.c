#include "parser.h"
#include "utils.h"
#include "networking.h"
#include <stdio.h>
#include <unistd.h>
int main(void){
	int c = 0;
	printf("parser -> %d\n", PARSER_DEF);
	printf("utils -> %d\n", UTILS_DEF);
	printf("networking -> %d\n", NETWORKING_DEF);
	while(c < 500){
		printf("Enleve Cecile et Jordan nounouilles %dfois \n\n",c);
		sleep(1);
		c++;
	}
}
