#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#define CHUNK 1024
int main(int argc, char* argv[]){
	FILE * file;
	char buffer[CHUNK];
	size_t nread;
	while(*(++argv)){
		file = fopen(*argv, "r");
		if(file){
			while((nread = fread(buffer, 1, sizeof buffer, file)) > 0){
				fwrite(buffer, 1, nread, stdout);
			}
			fclose(file);
		}else{
			printf("Le fichier %s n est pas lisible\n", *argv);
		}

	}
}
