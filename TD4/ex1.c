#include <stdio.h>
int main( int argc, const char* argv[] )
{
	while(*(++argv)){
		printf("%s", *argv);
	}
	printf("\n");
}
