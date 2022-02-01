import os, glob, shutil

def modify_file_content(filename, functor):
    with open(filename, 'r+') as f:
        text = f.read()
        f.seek(0)
        f.write(functor(text))
        f.truncate()

def generate_documentation(output_folder):
    # Clean the output folder
    for filename in glob.glob(f"{output_folder}/*"):
        if os.path.isdir(filename):
            shutil.rmtree(filename)
        else:
            if "00-introduction" not in filename:
                os.remove(filename)

    # Run Doxygen
    os.system(f"cmake . -B/dummy") # -B/xxx prevents CMake from generating all the build files

    # Run doxybook2
    os.system(f"doxybook2.exe --input Doxygen/xml --output {output_folder} --config doxybook_config.json --templates doxybook_templates")

    # Remove unwanted folders
    for filename in glob.glob(f"{output_folder}/*"):
        if os.path.isdir(filename) and os.path.basename(os.path.normpath(filename)) in ["Pages", "Examples", "Files", "Namespaces"]:
            shutil.rmtree(filename)

    # Remove index files
    for filename in glob.glob(f"{output_folder}/**", recursive=True):
        if "index_" in filename:
            os.remove(filename)

    # Remove the "group__" in the filenames and the content of the files
    for filename in glob.glob(f"{output_folder}/**", recursive=True):
        with_replacement = lambda text : text.replace("group__", "")
        if os.path.isfile(filename):
            modify_file_content(filename, with_replacement)
            os.rename(filename, with_replacement(filename))

    # Move the files of Modules at the root
    for filename in glob.glob(f"{output_folder}/Modules/**", recursive=True):
        if os.path.isfile(filename):
            os.rename(filename, filename.replace("Modules", ""))
    os.rmdir(f"{output_folder}/Modules")
    # Fix links by removing /Modules
    for filename in glob.glob(f"{output_folder}/**", recursive=True):
        if os.path.isfile(filename):
            modify_file_content(filename, lambda text : text.replace("/Modules", ""))

generate_documentation(output_folder = "../website/docs/reference")