export default function PreviewBox() {
    return (
        <div className="w-full mb-8">
            <div
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] rounded-xl backdrop-blur-md bg-white/60"
                style={{
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
            />
        </div>
    );
}

