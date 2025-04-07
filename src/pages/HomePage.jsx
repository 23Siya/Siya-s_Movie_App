import React from "react";
const mockMovies   = [{id: 1, title: 'Inception', genre: 'Sci-Fi', rating: 8.8 }];

function HomePage() {
    return (
        <div className="p-6">
        {/* Home Page Title */}
        <h2 className="text-2xl font-bold mb-4">Welcome to Movie Search</h2>
    
        {/* Featured Movies Section */}
        <h3 className="text-xl font-semibold mb-4">Featured Movies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockMovies.map((movie) => (
            <div key={movie.id} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{movie.title}</h3>
                <p className="text-gray-600 mb-2">Genre: {movie.genre}</p>
                <p className="text-gray-600">Rating: {movie.rating}</p>
            </div>
            ))}
        </div>
        </div>
    );
    
}
