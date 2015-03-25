#include <stdio.h>
#include <string.h>

int main(int argc, char* argv[]){
	int i;
	for(i = 1; i < argc; i++){
		int j;
		for(j = i+1 ; j < argc; j++){
			if(!strcmp(argv[i],argv[j])){
				printf("%s est en double \n",argv[i]);
			}
		}
	}

	return 0;
}
